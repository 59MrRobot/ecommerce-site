import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './Category.scss';

interface Props {
  subCategory: Children;
}

export const Category: React.FC<Props> = ({ subCategory }) => {
  const { handleCategorySelection } = useContext(AppContext);

  return (
    <div className="category">
      <h3 
        key={subCategory.id}
        className="category__title"
      >
        {subCategory.content.title.toUpperCase()}
      </h3>

      <ul className="category__list">
        {subCategory.children.map(child => (
          <li key={child.id} >
            <Link 
              to={`${child.content.title}`}
              className="category__link"
              onClick={() => {
                if (child.link && child.link.categoryId) {
                  handleCategorySelection(child.link.categoryId)
                }
              }}
            >
              {child.content.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
