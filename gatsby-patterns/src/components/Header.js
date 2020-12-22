import React from 'react';
import { Link } from 'gatsby';
import { FaAlignRight, FaSearch } from 'react-icons/fa';

import { linkData } from '../constants/Links';

import headerStyles from './header.module.css';

const Header = ({ toggleSidebar, openSearch }) => {
  const handleSearchIcon = (e) => {
    e.preventDefault();
    openSearch();
  };

  return (
    <header className={headerStyles.navbar}>
      <div className={headerStyles.navCenter}>
        <nav className={headerStyles.navHeader}>
        <Link to="/"><h2 className={headerStyles.logo}>Convo</h2></Link>
        <div className={headerStyles.searchAndListContainer}>
          <div className={headerStyles.searchIcon}>
            <FaSearch  onClick={handleSearchIcon} />
          </div>
            <button className={headerStyles.btn} type="button" onClick={toggleSidebar} aria-label="Dropdown Menu">
              <FaAlignRight></FaAlignRight>
            </button>
            <ul className={headerStyles.pageLinks}>
              {linkData.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                  </li>
              )})}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
};

export default Header;