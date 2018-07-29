import React from 'react';
import style from './hello-world.scss';

const HelloWorld = props => {
  const { title } = props;
  return <div className={style['hello-world']}>{title}</div>;
};

export default HelloWorld;
