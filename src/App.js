import React from 'react';

import './App.css';

import SiderDemo from './components/layout/primary.js'
import MainState
 from './context/application/MainState';
// export const AppContext = React.createContext()

function App() {
  // const [currentCUser, setCurrentCUser] = useState('Ashley T')
  // const [collapsed, setCollapsed] = useState(false)
  // const [currentPage, setCurrentPage] = useState('Dashboard')

  return (
    // <AppContext.Provider value={{currentCUser, setCurrentCUser, collapsed, setCollapsed, currentPage, setCurrentPage}}>
    <MainState>

      <div className="App">
        <SiderDemo />
      </div>
    </MainState>
    // </AppContext.Provider>
  );
}

export default App;

// END of document
