import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';

import styles from './lessons.module.css';

const LessonsPage = ({ data: { lessons }}) => {
  const allLessons = lessons.nodes.sort((a, b) => {
    return parseInt(a.lesson_number) > parseInt(b.lesson_number) ? 1 : -1;
  });
  const levels = ['1', '2', '3', '4', '5', '6'];
  return (
    <React.Fragment>
      <SEO 
        title="Convo Patterns Index"
        description="Full list of all the important English sentence patterns that you need to know to speak fluent English."
        location="https://www.convopatterns.com/lessons"
      />
      <div className={styles.wrapper}>
        <h1 className={styles.header}><span className={styles.underline}>All Lessons</span></h1>
        {levels.map((levelCategory, index) => {
          return (
            <div key={index}>
              <h2 className={styles.levelHeader}>{`Level ${levelCategory}`}</h2>
              <ul className={styles.list}>
                {allLessons.map((lesson) => {
                  if (lesson.level === levelCategory) {
                    return (
                      <li key={lesson._id} className={styles.listItem}><Link to={`/${lesson.slug.current}`} className={styles.link}>{`${lesson.title} - Lesson #${lesson.lesson_number}`}</Link></li>
                    )
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          )
        })}
        <div className={styles.spacer}></div>
      </div>
    </React.Fragment>
  );
};

export const query = graphql`
  query AllLessonsQuery {
    lessons: allSanityConvoPatterns(sort: { fields: level}) {
      nodes {
        _id
        title
        level
        lesson_number
        slug {
          current
        }
      }
    }
  }
`;

export default LessonsPage;