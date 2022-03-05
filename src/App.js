import React, { useState } from 'react';

import './App.css';

import SiderDemo from './components/layout/primary.js'

export const AppContext = React.createContext()

function App() {
  const [currentCUser, setCurrentCUser] = useState('Ashley T')
  const [collapsed, setCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState('Dashboard')

  return (
    <AppContext.Provider value={{currentCUser, setCurrentCUser, collapsed, setCollapsed, currentPage, setCurrentPage}}>
      <div className="App">
        <SiderDemo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
