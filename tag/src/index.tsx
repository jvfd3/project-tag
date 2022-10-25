import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicBoxClass from './handmade/routes/defaultpage';
import { BrowserRouter as Router } from 'react-router-dom';
import './handmade/styles/jv_styles.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <React.StrictMode>
      <BasicBoxClass />
    </React.StrictMode >
  </Router>
);