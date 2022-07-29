import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import { AppContext } from './context/AppContext';
import { Content } from './components/Content';

const App: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <AppContext.Provider value={{
      search,
    }}>
      <div className="app">
      <Header />

      <Content setSearch={setSearch} />
    </div>
    </AppContext.Provider>
  );
}

export default App;
