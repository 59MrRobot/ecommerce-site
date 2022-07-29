import React from 'react';
import './CategoriesList.scss';
import cn from 'classnames';

interface Props {
  categories?: Category[];
}

export const CategoriesList: React.FC<Props> = ({ categories }) => {
  return (
    <nav className="categories-list">
      <div className="categories-list__wrapper">
        {categories?.map(category => (
          <button
            key={category.id}
            type="button"
            className={cn(
              'categories-list__button',
              {'categories-list__button--special': category.content.title === 'Sale' || category.content.title === 'Outlet'}
            )}
          >
            {category.content.title.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  )
}
