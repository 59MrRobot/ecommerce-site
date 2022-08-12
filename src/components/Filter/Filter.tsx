import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import './Filter.scss';
import cn from 'classnames';

interface Props {
  filterType: string;
}

export const Filter: React.FC<Props> = ({ filterType }) => {
  const {
    sortBy,
    handleSort,
    priceValue,
    handlePriceFilter,
    priceRangeFacet,
    brandsFacet,
    selectedBrands,
    setSelectedBrands,
  } = useContext(AppContext);
  const [showRange, setShowRange] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [brands, setBrands] = useState<FacetValue[] | undefined>();
  const [query, setQuery] = useState('');
  const [filteredBrands, setFilteredBrands] = useState<FacetValue[] | undefined>(brands);

  useEffect(() => {
    if (brandsFacet) {
      setBrands(brandsFacet.facetValues);
    }

    setFilteredBrands(brands);
  }, [brands, brandsFacet, brandsFacet?.facetValues]);

  useEffect(() => {
    if (query && brands) {
      setFilteredBrands(brands?.filter(brand => brand.name.toLowerCase().includes(query.toLowerCase())))
    } else {
      setFilteredBrands(brands);
    }
  }, [brands, query, setSelectedBrands]);

  if (filterType === 'sort') {
    return (
      <div>
        <button
          type="button"
          className={cn(
            'filter__button',
            {'filter__button--active': showSort},
            {'filter__button--selected': sortBy !== 'none'}
          )}
          onClick={() => {
            if (setShowSort) {
              setShowSort(!showSort);
            }
          }}
        >
          Sort
          <img 
            src={`${process.env.PUBLIC_URL}/images/drop-down.png`} 
            alt="drop down"
            className="filter__button-image"
          />
        </button>
  
        {showSort && (
          <div className="filter-card">
            <div className="filter-card__wrapper filter-card__wrapper--sort">
              <button
                type="button"
                className={cn(
                  'filter__button-select',
                  {'filter__button-select--active': sortBy === 'descending'}
                )}
                onClick={() => {
                  handleSort('descending');
                  setShowSort(false);
                }}
              >
                Price (high to low)
              </button>
              <button
                type="button"
                className={cn(
                  'filter__button-select',
                  {'filter__button-select--active': sortBy === 'ascending'}
                )}
                onClick={() => {
                  handleSort('ascending');
                  setShowSort(false);
                }}
              >
                Price (low to high)
              </button>
            </div>
          </div>
        )}
      </div>
    )
  } else if (filterType === 'price') {
    return (
      <div className="filter">
        <button
          type="button"
          className={cn(
            'filter__button',
            {'filter__button--active': showRange},
            {'filter__button--selected': priceValue !== +priceRangeFacet?.facetValues[0].name!}
          )}
          onClick={() => {
            if (setShowRange) {
              setShowRange(!showRange);
            }
          }}
        >
          Price Range
          <img 
            src={`${process.env.PUBLIC_URL}/images/drop-down.png`} 
            alt="drop down"
            className="filter__button-image"
          />
        </button>
  
        {showRange && (
          <div className="filter-card">
            <div className="filter-card__wrapper">
              <div className="filter-card__title-content">
                <div>
                  <p className="filter-card__title">Price Range Selected</p>
                  <p className="filter-card__subtitle">
                    {`$${priceValue} - $${Number(priceRangeFacet?.facetValues[1].id).toFixed(0)}`}
                  </p>
                </div>
  
                <button
                  type="button"
                  className="filter-card__clear"
                  onClick={() => handlePriceFilter(Number(priceRangeFacet?.facetValues[0].id))}
                >
                  Clear
                </button>
              </div>
  
              <div className="filter-card__price-range">
                <p className="filter-card__price-range--values">
                  <span>{priceValue}</span>
                  <span>{Number(priceRangeFacet?.facetValues[1].id).toFixed(0)}</span>
                </p>
  
                <input
                  type="range"
                  name="priceRange"
                  min={Number(priceRangeFacet?.facetValues[0].name)}
                  max={Number(priceRangeFacet?.facetValues[1].name) - 5}
                  step="5"
                  value={priceValue}
                  onChange={(event) => handlePriceFilter(Number(event.target.value))}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className="filter">
        <button
          type="button"
          className={cn(
            'filter__button',
            {'filter__button--active': showBrands},
            {'filter__button--selected': selectedBrands.length !== 0}
          )}
          onClick={() => {
            if (setShowBrands) {
              setShowBrands(!showBrands);
            }
          }}
        >
          Brands
          <img 
            src={`${process.env.PUBLIC_URL}/images/drop-down.png`} 
            alt="drop down"
            className="filter__button-image"
          />
        </button>
  
        {showBrands && (
          <div className="filter-card">
            <div className="filter-card__wrapper">
              <div className="filter-card__title-content">
                <div>
                  <p>{`${selectedBrands.length} selected`}</p>
                </div>
  
                <button
                  type="button"
                  className="filter-card__clear"
                  onClick={() => setSelectedBrands([])}
                >
                  Clear
                </button>
              </div>
  
              <div className="filter-card__price-range">
                <input 
                  type="text" 
                  value={query}
                  placeholder="Search"
                  onChange={(event) => setQuery(event.target.value)}
                />

                <ul className="filter__brands-list">
                  {filteredBrands?.map(brand => (
                    <li key={brand.id}>
                      <button
                        type="button"
                        className={cn(
                          'filter__button-select',
                          'filter__button-select--brand',
                          {'filter__button-select--active': selectedBrands.includes(brand.name)}
                        )}
                        onClick={() => {
                          if (selectedBrands.includes(brand.name)) {
                            setSelectedBrands(selectedBrands.filter(brandName => brandName !== brand.name));
                          } else {
                            setSelectedBrands((prevBrands) => [
                              ...prevBrands,
                              brand.name,
                            ]);
                          }
                        }}
                      >
                        {brand.name}
                        <span className="filter__brands-count">{`(${brand.count})`}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
