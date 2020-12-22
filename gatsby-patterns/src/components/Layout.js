import React, { useState, useEffect } from 'react';

import 'normalize.css';
import '../styles/index.css';
import layoutStyles from './layout.module.css';

import Header from './Header';
import Footer from './Footer';
import Search from '../components/Search';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <React.Fragment>
      <div className={layoutStyles.container}>
        <Header 
          toggleSidebar={toggleSidebar} 
          isSearchOpen={isSearchOpen}
          openSearch={openSearch}
          closeSearch={closeSearch}  
        />
        <Sidebar 
          isOpen={isOpen} 
          toggleSidebar={toggleSidebar}
        />
        {children}
      </div>
      {isSearchOpen ? 
      <Search 
        isSearchOpen={isSearchOpen} 
        openSearch={openSearch}
        closeSearch={closeSearch}  
      /> :
      null
      }
      <Footer />
    </React.Fragment>
  );
};

export default Layout;