import React from 'react';
import { Col } from 'reactstrap';
import style from './card.scss';

const Card = (props) => {
    const { product, imgUrl } = props;

    return (
        <Col sm="6" xs="12" md="4" lg="3">
            <div className={style.card}>
                <figure className={style.heroPic}>
                    <img src={imgUrl} alt={product.productName} />
                </figure>
                { product.isSale || product.isExclusive
                    ? (
                        <div className={style.badges}>
                            { product.isSale
                            ? (
                                <span className={style.onSale}>
                                    Sale
                                </span>
                                )
                            : null
                            }
                            { product.isExclusive
                            ? (
                                <span className={style.exclusive}>
                                    Exclusive
                                </span>
                                )
                            : null
                            }
                        </div>
                    )
                    : null
                }
                <div className={style.metas}>
                    <h3 className={style.name}>
                        <a>
                            {product.productName}
                        </a>
                    </h3>
                    <span className={style.price}>
                        {product.price}
                    </span>
                </div>
            </div>
        </Col>
    );
};

export default Card;
