import React from 'react';

import LessonCard from './LessonCard';

import gridStyles from './lessons-grid.module.css';

const LessonsGrid = ({ lessons }) => {
  return (
    <div className={gridStyles.lessonGrid}>
      {lessons.map((lesson) => (
        <LessonCard key={lesson._id} lesson={lesson} />
      ))}
    </div>
  );
};

export default LessonsGrid;