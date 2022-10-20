// Main Page

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import MainPage from '../pages/main';
import SelfPage from '../pages/self';
import AddTagPage from '../pages/add';
import SearchTagPage from '../pages/search';
// import SignInPage from '../pages/signIn';
// import SignUpPage from '../pages/signUp';


class HandmadeRouter extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/self' element={<SelfPage />} />
          <Route path='/add' element={<AddTagPage />} />
          <Route path='/search' element={<SearchTagPage />} />
        </Routes>
      </Router>
    );
  }
}

export default HandmadeRouter;