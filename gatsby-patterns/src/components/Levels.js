import React from 'react';
import cx from 'classnames';

import styles from './levels.module.css';

const Levels = ({ levels, filterLessons, selectedLevel }) => {
  return (
    <React.Fragment>
      <div className={styles.btnContainer}>
        {levels.map((level, index) => {
          return (
            <button
              type="button"
              key={index}
              className={cx(styles.filterBtn, [selectedLevel === level ? styles.selected : styles.unselected])}
              onClick={() => filterLessons(level)}
            >
              {level === 'all' ? 'All' : `Level ${level}`}
            </button>
          )
        })}
      </div>
    </React.Fragment>
  );
};

export default Levels;