import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './routes/test1'
import Invoices from './routes/test2'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
          <Route path='test1' element={<Expenses />}/>
          <Route path='test2' element={<Invoices />}/>
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

