import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Categories } from '../Categories';
import { Filters } from '../Filters';
import cn from 'classnames';
import s from '../../api/categories.json';
import './Content.scss';

interface Props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Content: React.FC<Props> = ({ setSearch }) => {
  const { search } = useContext(AppContext);
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedSectionId, setSelectedSectionId] = useState('');

  const selectedSection = sections.find(section => section.id === selectedSectionId);

  let categories: Category[] | undefined;

  if (selectedSection) {
    categories = selectedSection.children.find(child => child.content.title === 'Categories')?.children;
  }

  // const loadSections = async () => {
  //   const loadedSections = await getCategories();

  //   setSections(loadedSections.navigation);
  // }

  useEffect(() => {
    // loadSections();
    setSections(s.navigation);
  }, []);

  return (
    <div className="content">
      <div className="content__wrapper">
        <div className="content__search-container">
          <div className="content__sections">
            {sections.map(section => (
              <NavLink
                key={section.id}
                to={section.content.title.toLowerCase()}
                className={({ isActive }) => (
                  cn(
                    'content__sections-link',
                    {'is-active': isActive }
                  )
                )}
                onClick={() => setSelectedSectionId(section.id)}
              >
                {section.content.title.toLowerCase()}
              </NavLink>
            ))}
          </div>

          <input 
            type="text"
            name="search"
            value={search}
            placeholder="Search for products..."
            className="content__search"
            onChange={(event) => setSearch(event.target.value)}
          />

          <button 
            type="button"
            className="content__button"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/search.svg`} 
              alt=""
              className="content__button-image"
            />
          </button>
        </div>

        <div className="content__categories">
          <Categories categories={categories} />
        </div>
      </div>

      <div className="container filters">
        <div className="row">
          <Filters />

          <section className="col">
            Products
          </section>
        </div>
      </div>
    </div>
  )
}
