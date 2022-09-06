import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { CategoriesList } from '../CategoriesList';
import cn from 'classnames';
import s from '../../api/categories.json';
import './Categories.scss';

export const Categories: React.FC = React.memo(
  () => {
    const {
      selectedSectionTitle,
      handleSectionSelection
    } = useContext(AppContext);

    const [sections, setSections] = useState<Section[]>([]);
    const [categories, setCategories] = useState<Category[] | undefined>([]);

    const location = useLocation();

    // const loadSections = useCallback(
    //   async () => {
    //     const loadedSections = await getCategories();

    //     setSections(loadedSections.navigation);
    //   }, [],
    // );

    useEffect(() => {
      // loadSections();
      setSections(s.navigation);

      if (location.pathname === '/men') {
        handleSectionSelection('men');
      } else if (location.pathname === '/women') {
        handleSectionSelection('women');
      }

      const selectedSection = sections.find(section =>
        section.content.title.toLowerCase() === selectedSectionTitle);
  
      if (selectedSection) {
        setCategories(selectedSection.children.find(child =>
          child.content.title === 'Categories')?.children);
      }
    }, [handleSectionSelection, location.pathname, sections, selectedSectionTitle]);

    const filteredCategories = categories?.filter(category => category.content.title !== 'UP TO 80% OFF' && category.content.title !== 'UP TO 80% OFF!');
    

    return (
      <>
        <div className="categories">
          <div className="categories__wrapper">
            <div className="categories__search-container">
              <div className="categories__sections">
                {sections.map(section => (
                  <NavLink
                    key={section.id}
                    to={`/${section.content.title.toLowerCase()}`}
                    className={({ isActive }) => (
                      cn(
                        'categories__sections-link',
                        {'is-active': isActive }
                      )
                    )}
                  >
                    {section.content.title.toUpperCase()}
                  </NavLink>
                ))}
              </div>

              <input 
                type="text"
                name="search"
                placeholder="Search for products..."
                className="categories__search"
              />

              <button 
                type="button"
                className="categories__button"
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/images/search.svg`} 
                  alt=""
                  className="categories__button-image"
                />
              </button>
            </div>

            <div className="categories__list">
              <CategoriesList categories={filteredCategories} />
            </div>
          </div>
        </div>
      </>
    );
  }
);
