/* eslint-disable */
import React from 'react';
import style from './card.scss';
import { Container, Row, Col } from 'reactstrap';


const Card = (props) => {
    const { product } = props;
    /**
     * because we have to import images dynamically from a local dir and we can't use
     * dynamic require we have to import them all in one batch with require.context, which also 
     * maintain the minification we need when building for production, couldn't find another way.
     * https://webpack.js.org/guides/dependency-management/
    */
    const importAll = (r) => {
        const images = {};
        r.keys().map((item) => {
            const key = item.replace('./', '');
            const val = r(item);
            images[key] = val;
        });
        return images;
    }

    const images = importAll(require.context('../../../assets/img', false, /\.(png|jpe?g|svg)$/));

    return (
        <Col sm="6" xs="12" md="4" lg="3">
            <div className={style.card}>
                <figure className={style.heroPic}>
                    <img src={images[product.productImage]} alt={product.productName} />
                </figure>
                { product.isSale || product.isExclusive ?
                    <div className={style.badges}>
                        { product.isSale ?
                            <span className={style.onSale}>Sale</span>
                            : null
                        }
                        { product.isExclusive ?
                            <span className={style.exclusive}>Exclusive</span>
                            :null
                        }
                    </div>
                    :null
                }
                <div className={style.metas}>
                    <h3 className={style.name}><a href="#">{product.productName}</a></h3>
                    <span className={style.price}>{product.price}</span>
                </div>
            </div>
        </Col>
    );
};

export default Card;
