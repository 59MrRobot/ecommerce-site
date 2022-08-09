import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import './Filters.scss';

export const Filters: React.FC = () => {
  const { handleSort, priceValue, handlePriceFilter, priceRangeFacet } = useContext(AppContext);

  const [showRange, setShowRange] = useState(false);

  return (
    <section className="filters">
      <div className="filters__wrapper">
        <select 
          name="sort"
          onChange={(event) => handleSort(event.target.value)}
        >
          <option value="none">Sort</option>
          <option value='descending'>Price (high to low)</option>
          <option value='ascending'>Price (low to high)</option>
        </select>

        <div>
          <button
            type="button"
            className="filters__button"
            onClick={() => setShowRange(!showRange)}
          >
            Price Range
            <img 
              src={`${process.env.PUBLIC_URL}/images/drop-down.png`} 
              alt="drop down"
              className="filters__button-image"
            />
          </button>

          {showRange && (
            <div className="filters-card">
              <div className="filters-card__wrapper">
                <div className="filters-card__title-content">
                  <div>
                    <p className="filters-card__title">Price Range Selected</p>
                    <p className="filters-card__subtitle">
                      {`$${priceValue} - $${Number(priceRangeFacet?.facetValues[1].id).toFixed(0)}`}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="filters-card__clear"
                    onClick={() => handlePriceFilter(Number(priceRangeFacet?.facetValues[0].id))}
                  >
                    Clear
                  </button>
                </div>

                <div className="filters-card__price-range">
                  <p className="filters-card__price-range--values">
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
      </div>
    </section>
  )
}
