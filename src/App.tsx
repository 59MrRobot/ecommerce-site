import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import { AppContext } from './context/AppContext';
import { Content } from './components/Categories';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Filters } from './components/Filters';

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string | undefined>('men');

  console.log(selectedSectionTitle);

  return (
    <AppContext.Provider value={{
      search,
      selectedSectionTitle,
    }}>
      <div className="app">
        <Header />

        <Routes>
          <Route 
            path="/" 
            element={<Navigate 
              to={selectedSectionTitle!}
              replace={true}
            />}
          />
          <Route 
            path={`/men`} 
            element={<Content 
              setSearch={setSearch} 
              setSelectedSectionTitle={setSelectedSectionTitle}
            />}
          />
          <Route 
            path={`/women`} 
            element={<Content 
              setSearch={setSearch} 
              setSelectedSectionTitle={setSelectedSectionTitle}
            />}
          />
        </Routes>

        <div className="container filters">
          <div className="row">
            <Filters />

            <section className="col">
              Products
            </section>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
