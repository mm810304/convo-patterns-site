import React, { useState } from 'react';
import { graphql } from 'gatsby';

import LessonsGrid from '../components/LessonsGrid';
import Levels from '../components/Levels';
import MainPageHeader from '../components/MainPageHeader';
import SEO from '../components/SEO';

import { shuffle } from '../utils/shuffle';

const allLevels = ['all', '1', '2', '3', '4', '5', '6'];

const HomePage = ({ data: { lessons }}) => {
  const patternLessons = shuffle(lessons.nodes);
  const [visibleLessons, setVisibleLessons] = useState(patternLessons);
  const [isSelectedLevel, setIsSelectedLevel] =useState('all');

  const filterLessons = (level) => {
    if (level === 'all') {
      setVisibleLessons(patternLessons);
      setIsSelectedLevel('all');
      return;
    }

    const newVisibleLessons = patternLessons.filter((lesson) => {
      return lesson.level === level;
    });

    setVisibleLessons(newVisibleLessons.sort((a, b) => {
      if (parseInt(a.lesson_number) > parseInt(b.lesson_number)) {
        return 1;
      } else {
        return -1;
      }
    }));
    setIsSelectedLevel(level);
  }

  return (
    <React.Fragment>
      <SEO 
        title="Learn English Sentence Patterns" description="Learn English sentence patterns to speak fluent English and understand native English speakers perfectly.  See how to use and many real-world examples."
        location="https://www.convopatterns.com"
      />
      <MainPageHeader />
      <Levels levels={allLevels} filterLessons={filterLessons} selectedLevel={isSelectedLevel} />
      <LessonsGrid lessons={visibleLessons} />
    </React.Fragment>
  );
};

export const query = graphql`
  query {
    lessons: allSanityConvoPatterns {
      nodes {
        _id
        title
        level
        lesson_number
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default HomePage;