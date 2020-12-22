import React from 'react';

import { resourceData } from '../constants/Resources';

import resourceStyles from './convo.module.css';

const Convo = () => {
  return (
    <div className={resourceStyles.wrapper}>
      <h1 className={resourceStyles.title}>Free English Lessons For Everything</h1>
      {
        resourceData.map((resource) => {
          return (
            <a href={resource.url} target="_blank" rel="noreferrer"><div key={resource.id} className={resourceStyles.resource}>
              <h2>{resource.text}</h2>
              <p>{resource.description}</p>
            </div></a>
          )
        })
      }
    </div>
  );
};

export default Convo;