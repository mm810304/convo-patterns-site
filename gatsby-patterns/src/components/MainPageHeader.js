import React from 'react';
import { Link } from 'gatsby';

import styles from './main-page-header.module.css';

const MainPageHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>Convo Patterns</h1>
      <p className={styles.description}>All Key English Sentence Patterns for Fluent English.</p>
      <p className={styles.otherLessons}>Looking for a different type of free English lesson?  <Link to="/convo"><span className={styles.colorIt}>Check out our other <strong>amazing free English content</strong> here.</span></Link></p>
  </div>
  );
};

export default MainPageHeader;