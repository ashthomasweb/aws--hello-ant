import React, { useState } from 'react';

import './App.css';

import SiderDemo from './components/layout/primary.js'

export const AppContext = React.createContext()

function App() {
  const [currentCUser, setCurrentCUser] = useState('Ashley T')

  return (
    <AppContext.Provider value={{currentCUser, setCurrentCUser}}>
      <div className="App">
        <SiderDemo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
