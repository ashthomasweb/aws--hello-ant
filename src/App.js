import React from 'react';
import './App.css';
import PrimaryLayout from './components/layout/primary-layout.js'
import MainState from './context/application/MainState';

function App() {

  return (
    <MainState>
        <div className="App">
            <PrimaryLayout />
        </div>
    </MainState>
  );
}

export default App;

// END of document
