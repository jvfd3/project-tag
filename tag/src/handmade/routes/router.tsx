// Main Page

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Placeholder1 from '../pages/page_1';
import Placeholder2 from '../pages/page_2';
import Placeholder3 from '../pages/page_3';


class HandmadeRouter extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Placeholder1 />} />
          <Route path='/2' element={<Placeholder2 />} />
          <Route path='/3' element={<Placeholder3 />} />
        </Routes>
      </Router>
    );
  }
}

export default HandmadeRouter;