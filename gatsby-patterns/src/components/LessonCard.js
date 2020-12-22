import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import cardStyle from './lesson-card.module.css';

const LessonCard = ({ lesson }) => {
  const { title, level, image, slug, lesson_number } = lesson;

  return (
    <article className={cardStyle.cardContainer}>
      <Link to={`/${slug.current}`}>
        <div className={cardStyle.imageContainer}>
          <Img 
            fluid={image.asset.fluid}
            alt={`Lesson image for ${title}`}
            className={cardStyle.image}
          />
        </div>
        <div className={cardStyle.text}>
          <h4 className={cardStyle.level}>{`Level ${level} - Lesson #${lesson_number}`}</h4>
          <h2 className={cardStyle.title}>{title}</h2>
        </div>
      </Link>
      
    </article>
  );
};

export default LessonCard;