import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import { useStaticQuery, Link, graphql } from 'gatsby';

import styles from './search.module.css';

const Search = ({ isSearchOpen, closeSearch}) => {
  const { lessonsData } = useStaticQuery(graphql`
    query {
      lessonsData: allSanityConvoPatterns {
        nodes {
          id
          title
          level
          lesson_number
          slug {
            current
          }
        }
      }
    }
  `);

  const lessons = lessonsData.nodes;

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [requestCount, setRequestCount] = useState(0);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    document.addEventListener('keyup', searchKeyPressHandler);
    return () => document.removeEventListener('keyup', searchKeyPressHandler);
  }, []);
    
  const searchKeyPressHandler = (e) => {
    if (e.keyCode === 27) {
      closeSearch();
    }
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    setRequestCount(requestCount + 1);
  }, [searchTerm]);

  useEffect(() => {
    if (requestCount === 0) {
      setSearchResults('');
      return;
    }
    if (requestCount !== 0) {
      const resultMatches = lessons.filter((lesson) => {
        const lowerCaseTitle = lesson.title.toLowerCase();
       
        return lowerCaseTitle.includes(searchTerm.toLowerCase());
      });

      if (resultMatches.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
      
      setSearchResults(resultMatches);
    }
  }, [requestCount]);

  return (
      <div className={styles.searchOverlay}>
        <div className={styles.searchOverlayTop}>
          <div className={styles.searchOverlayTopContainer}>
            <label htmlFor="live-search-field" >
              <FaSearch className={styles.searchOverlayIcon} />
            </label>
            <input 
              type="text" 
              autoComplete="off" id="live-search-field" 
              className={styles.liveSearchField} 
              placeholder="What are you looking for?" 
              onChange={handleSearchInput}
              />
              <FaTimesCircle 
                className={styles.closeLiveSearch} 
                onClick={() => closeSearch()}  
              />
          </div>
        </div>

      <div className={styles.searchOverlayBottom}>
        <div className={styles.searchOverlayBottomContainer}>
          <div className={cx(styles.liveSearchResults, [isSearchOpen ? styles.visibleResults : styles.notVisibleResults])}>
            <div className={styles.searchListContainer}>
               <ul className={styles.list}>
                 {
                   noResults ? 
                  <li className={styles.listItem}>No Results Found</li> 
                  : null
                 }
                {searchTerm && searchResults.map((result) => {
                    const {title, level, lesson_number, id } = result;
                    return (
                      <Link 
                        to={`/${result.slug.current}`}
                        onClick={closeSearch}  
                        key={id}
                      >
                        <li className={styles.listItem}>{`${title} - Level ${level} - Lesson #${lesson_number}`}</li>
                      </Link>
                    )
                  })}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;