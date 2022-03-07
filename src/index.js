import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import {Fleet} from './routes/fleet.js'
import {Inspections} from './routes/inspections.js'
import {WorkOrders} from './routes/work-orders.js'
import {Analytics} from './routes/analytics.js'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
          <Route path='fleet' element={<Fleet />}/>
          <Route path='inspections' element={<Inspections />}/>
          <Route path='work-orders' element={<WorkOrders />}/>
          <Route path='analytics' element={<Analytics />}/>
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// END of document
