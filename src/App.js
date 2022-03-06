import React from 'react';
import './App.css';
import SiderDemo from './components/layout/primary.js'
import MainState from './context/application/MainState';

function App() {

  return (
    <MainState>
      <div className="App">
        <SiderDemo />
      </div>
    </MainState>
  );
}

export default App;

// END of document
