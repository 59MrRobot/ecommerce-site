import React, { Children, useRef, useState } from 'react';
import './CategoriesList.scss';
import cn from 'classnames';

import gsap from 'gsap';
import { Category } from '../Category';

interface Props {
  categories?: Category[];
}

const cats = ['SHOP BY PRODUCT', 'SHOP BY EDIT', 'SHOP BY BODY FIT', 'NEW PRODUCTS', 'NEW EDITS', 'SHOP BY OCCASSION', 'SHOP BY COLOR', 'SHOP BY BRAND', 'SHOP BY ACTIVITY', 'PLUS SIZE', 'TALL', 'TOP BRANDS', "WHAT TO WEAR", "FIND YOUR FIT AND LENGTH", "TRENDING NOW"]

export const CategoriesList: React.FC<Props> = ({ categories }) => {
  const [subCategories, setSubCategories] = useState<Children[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);

  const cat = useRef<HTMLDivElement | null>(null);

  const filteredSubCategories = subCategories.filter(subCategory => {
    if (hoveredCategory?.content.title === 'Summer' && 
    subCategory.content.title === 'TRENDING') {
      return subCategory;
    }

    return cats.some(cat => {
      if ((hoveredCategory?.content.title === 'Shoes' || 
        hoveredCategory?.content.title === 'Accessories' || 
        hoveredCategory?.content.title === 'Face + Body' ||
        hoveredCategory?.content.title === 'Outlet') && cat === 'NEW EDITS') {
        return 0;
      }

      if (hoveredCategory?.content.title === 'Outlet' && 
        cat.toLowerCase() === 'shop by body fit') {
        return 0;
        }

      return cat === subCategory.content.title.toUpperCase();
    })
  });
  

  return (
    <div className="categories">
      <nav className="categories-list">
        <div className="categories-list__wrapper">
          {categories?.map(category => {
            if (category.content.title.toUpperCase() !== 'TRENDING NOW') {
              return (
                <button
                  key={category.id}
                  type="button"
                  className={cn(
                    'categories-list__button',
                    {'categories-list__button--special': category.content.title === 'Sale' || category.content.title === 'Outlet'}
                  )}
                  onMouseEnter={() => {
                    setSubCategories(category.children);
                    setHoveredCategory(category);
                    gsap.to(cat.current, {
                      display: 'unset',
                      duration: 0,
                    })
                  }}
                  // onMouseLeave={() => {
                  //   gsap.to(cat.current, {
                  //     display: 'none',
                  //     duration: 0,
                  //   })
                  // }}
                >
                  {category.content.title.toUpperCase()}
                </button>
              );
            }
            return null;
          })}
        </div>
      </nav>

      <div
        className="categories__card"
        ref={cat}
        onMouseEnter={() => {
          gsap.to(cat.current, {
            display: 'unset',
            duration: 0,
          })
        }}
        onMouseLeave={() => {
          gsap.to(cat.current, {
            display: 'none',
            duration: 0,
          })
        }}
      >
        <div className="categories__card-wrapper">
          {filteredSubCategories.map(subCategory => (
            <Category subCategory={subCategory} />
          ))}
        </div>
      </div>
    </div>
  )
}
