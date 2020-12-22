import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

import styles from './lesson.module.css';

const LessonPage = ({data: { lesson }}) => {
  const { title, level, content, lesson_number } = lesson;
  return (
    <React.Fragment>
      <SEO 
        title={title} 
        description={`${title} - Level ${level} - Learn how to use this key English sentence pattern in conversations.`}
      />
      <div className={styles.lessonPageWrapper}>
        <div className={styles.lessonContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.level}>{`Level ${level} - Lesson Number ${lesson_number}`}</h4>
          <main className={styles.mainContent}>
            {ReactHtmlParser(content)}
          </main>
        </div>
      </div>
    </React.Fragment>
    
  );
};

export const query = graphql`
  query($slug: String!) {
    lesson: sanityConvoPatterns(slug: {
      current: {
        eq: $slug
      }
    }) {
      title
      level
      lesson_number
      content
    }
  }
`;

export default LessonPage;