import React, { Children, useState } from 'react';
import './CategoriesList.scss';
import cn from 'classnames';

import { Category } from '../Category';

interface Props {
  categories?: Category[];
}

const cats = ['SHOP BY PRODUCT', 'SHOP BY EDIT', 'SHOP BY BODY FIT', 'NEW PRODUCTS', 'NEW EDITS', 'SHOP BY OCCASSION', 'SHOP BY COLOR', 'SHOP BY BRAND', 'SHOP BY ACTIVITY', 'PLUS SIZE', 'TALL', 'TOP BRANDS', "WHAT TO WEAR", "FIND YOUR FIT AND LENGTH", "TRENDING NOW"]

export const CategoriesList: React.FC<Props> = ({ categories }) => {
  const [subCategories, setSubCategories] = useState<Children[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);

  const [showCategoryCard, setShowCategoryCard] = useState(false);

  // const { handleCategorySelectionTitle } = useContext(AppContext);

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

  const handleCategoryCardClose = () => {
    setShowCategoryCard(false);
  }

  return (
    <>
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

                    setTimeout(() => {
                      setShowCategoryCard(true);
                    }, 500)
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setShowCategoryCard(false);
                    }, 500)
                  }}
                >
                  {category.content.title.toUpperCase()}
                </button>
              );
            }
            return null;
          })}
        </div>
      </nav>

      {showCategoryCard && (
        <div
          className="categories__card"
          onMouseEnter={() => {
            setTimeout(() => {
              setShowCategoryCard(true);
            }, 500)
          }}
          onMouseLeave={() => {
            setShowCategoryCard(false);
          }}
        >
          <div className="categories__card-wrapper">
            {filteredSubCategories.map(subCategory => (
              <Category
                key ={subCategory.id}
                hoveredCategoryTitle={hoveredCategory?.content.title!}
                subCategory={subCategory}
                handleCategoryCardClose={handleCategoryCardClose}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
