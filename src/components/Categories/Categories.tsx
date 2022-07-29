import React from 'react';
import './Categories.scss';

interface Props {
  categories?: Category[];
}

export const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <nav className="categories">
      <div className="categories__wrapper">
        {categories?.map(category => (
          <button
            type="button"
            className="categories__button"
          >
            {category.content.title.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  )
}
