import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicBoxClass from './handmade/routes/defaultpage';
import './handmade/styles/jv_styles.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BasicBoxClass />
  </React.StrictMode >
);