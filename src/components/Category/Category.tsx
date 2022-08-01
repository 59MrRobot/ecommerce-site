import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './Category.scss';

interface Props {
  subCategory: Children;
  hoveredCategoryTitle: string;
  handleCategoryCardClose: () => void;
}

export const Category: React.FC<Props> = ({ 
  subCategory, 
  hoveredCategoryTitle, 
  handleCategoryCardClose,
}) => {
  const {
    selectedSectionTitle,
    handleCategorySelection, 
    selectedCategoryTitle,
    handleChildSelectionTitle,
    handleCategorySelectionTitle,
  } = useContext(AppContext);

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
              to={`/${selectedSectionTitle}/${selectedCategoryTitle.toLowerCase().split(' ').join('_')}/${child.content.title.toLowerCase().split(' ').join('-')}`}
              className="category__link"
              onClick={() => {
                if (child.link && child.link.categoryId) {
                  handleCategorySelection(child.link.categoryId);
                  handleChildSelectionTitle(child.content.title.toLowerCase());
                }

                if (hoveredCategoryTitle) {
                  handleCategorySelectionTitle(hoveredCategoryTitle.toLowerCase());
                }

                handleCategoryCardClose();
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
