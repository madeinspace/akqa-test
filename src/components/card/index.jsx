/* eslint-disable */
import React from 'react';
import style from './card.scss';

const Card = (props) => {
  const { data } = props;
  const importAll = (r) => {
    const images = {};
    r.keys().map(item => images[item.replace('./', '')] = r(item));
    return images;
  }
  
  const images = importAll(require.context('../../../assets/img', false, /\.(png|jpe?g|svg)$/));

  console.log('img: ', images);
  return (
    <div className={style.card}>
        <img src={images[data.productImage]} alt="" />
    </div>
  );
};

export default Card;
