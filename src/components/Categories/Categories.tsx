import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { CategoriesList } from '../CategoriesList';
import cn from 'classnames';
import s from '../../api/categories.json';
import './Categories.scss';
import { Filters } from '../Filters';
// import { ProductsList } from '../ProductsList';


import { getProductsList } from '../../api/productsList';

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSelectedSectionTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Categories: React.FC<Props> = React.memo(
  ({ setSearch, setSelectedSectionTitle }) => {
    const {
      search,
      selectedSectionTitle,
      // selectedCategoryId,
      // selectedCategoryTitle,
      // selectedChildTitle,
  } = useContext(AppContext);

    const [sections, setSections] = useState<Section[]>([]);
    // const [selectedSectionTitle, setSelectedSectionTitle] = useState('');
    const [categories, setCategories] = useState<Category[] | undefined>([]);

    const location = useLocation();

    // let categories: Category[] | undefined;

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
        setSelectedSectionTitle('men')
      } else if (location.pathname === '/women') {
        setSelectedSectionTitle('women')
      }

      const selectedSection = sections.find(section =>
        section.content.title.toLowerCase() === selectedSectionTitle);
  
      if (selectedSection) {
        setCategories(selectedSection.children.find(child =>
          child.content.title === 'Categories')?.children);
      }
    }, [location.pathname, sections, selectedSectionTitle, setSelectedSectionTitle]);

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
                value={search}
                placeholder="Search for products..."
                className="categories__search"
                onChange={(event) => setSearch(event.target.value)}
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

        {/* <div className="main-content">
          <div className="main-content__wrapper">
            <Filters />
            
            <Routes>
              <Route
                path={`/${selectedSectionTitle}/${selectedCategoryTitle.toLowerCase().split(' ').join('_')}/${selectedChildTitle.toLowerCase().split(' ').join('-')}`}
                element={<ProductsList categoryName={categoryName} products={products} />}
              />
            </Routes>
          </div>
        </div> */}
      </>
    );
  }
);
