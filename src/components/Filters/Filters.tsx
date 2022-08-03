import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import './Filters.scss';

export const Filters: React.FC = () => {
  const { handleSort, priceRange, priceFilter, handlePriceFilter, facets } = useContext(AppContext);

  const [showRange, setShowRange] = useState(false);
  const [priceRangeFacet, setPriceRangeFacet] = useState<Facet | undefined>();
  const [minmax, setMinmax] = useState<[number, number] | []>([]);

  useEffect(() => {
    setPriceRangeFacet(facets.find(facet => facet.name === 'Price Range'));
    console.log(priceRangeFacet);
  }, [facets, priceRangeFacet]);

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
            <div className="filters__card">
              <div>
                <p className="filters__card-title">Price Range Selected</p>
                <p className="filters__card-subtitle">
                  {`$${priceRangeFacet?.facetValues[0].id} - $${priceRangeFacet?.facetValues[1].id}`}
                </p>
              </div>

              <input
                type="range"
                name="priceRange"
                min={Number(priceRangeFacet?.facetValues[0].name)}
                max={Number(priceRangeFacet?.facetValues[1].name)}
                step="5"
                // value={Math.floor(priceRange[0]!)}
                onChange={(event) => console.log(+event.target.value)}
              />
            </div>
          )}
        </div>
        <output 
          id="amount" 
          name="amount" 
          htmlFor="priceRange"
        >
          {priceFilter}
        </output>
      </div>
    </section>
  )
}
