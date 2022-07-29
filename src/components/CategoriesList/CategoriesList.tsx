import React, { Children, useState } from 'react';
import './CategoriesList.scss';
import cn from 'classnames';

interface Props {
  categories?: Category[];
}

const cats = ['SHOP BY PRODUCT', 'SHOP BY EDIT', 'SHOP BY BODY FIT', 'NEW PRODUCTS', 'NEW EDITS', 'SHOP BY OCCASSION', 'SHOP BY COLOR', 'SHOP BY BRAND', 'SHOP BY ACTIVITY', 'PLUS SIZE', 'TALL', 'TOP BRANDS']

export const CategoriesList: React.FC<Props> = ({ categories }) => {
  const [children, setChildren] = useState<Children[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<Category>();

  const filteredChildren = children.filter(child => {
    return cats.some(cat => {
      if ((hoveredCategory?.content.title === 'Shoes' || 
      hoveredCategory?.content.title === 'Accessories' || 
      hoveredCategory?.content.title === 'Face + Body') && cat === 'NEW EDITS') {
        return 0;
      }

      return cat === child.content.title.toUpperCase();
    })
  });

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
                    setChildren(category.children);
                    setHoveredCategory(category);
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
      <div className="category">
        <div className="category__wrapper">
          {filteredChildren.map(child => (
            <p key={child.id}>{child.content.title}</p>
          ))}
        </div>
      </div>
    </>
  )
}
