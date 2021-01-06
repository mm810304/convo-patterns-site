import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

import styles from './lesson.module.css';

const LessonPage = ({data: { lesson }}) => {
  const { title, level, content, lesson_number } = lesson;
  const SEOImage = lesson.image.asset.fluid;
  const slug = lesson.slug.current;

  return (
    <React.Fragment>
      <SEO 
        title={title} 
        description={`Learn how to use the English sentence pattern "${title}" when speaking or writing. The lesson includes a simple explanation with many example sentences and conversations.`}
        image={SEOImage.src}
        location={`https://www.convopatterns.com/${slug}`}
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
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default LessonPage;