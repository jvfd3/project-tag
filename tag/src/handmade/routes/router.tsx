// Main Page

import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import MainPage from '../pages/main';
import SelfPage from '../pages/self';
import AddTagPage from '../pages/add';
import SearchTagPage from '../pages/search';
import AboutPage from '../pages/about';
// import SignInPage from '../pages/signIn';
// import SignUpPage from '../pages/signUp';


class HandmadeRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/self' element={<SelfPage />} />
        <Route path='/add' element={<AddTagPage />} />
        <Route path='/search' element={<SearchTagPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    );
  }
}

export default HandmadeRouter;