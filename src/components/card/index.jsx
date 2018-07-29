import React from 'react';
import style from './card.scss';

const Card = (props) => {
  const { title } = props;
  return (
    <div className={style.card}>
        {title}
    </div>
  );
};

export default Card;
