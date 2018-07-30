import React, { Component } from 'react';
import _ from 'lodash';
import style from './store.scss';
import SizeFilter from '../size-filter';
import Card from '../card';

export default class Store extends Component {
    constructor(props) {
        super(props);

        const { products } = this.props;

        this.state = {
            currentSize: 'ALL',
            products,
        };
        this.handleSizeFilterChange = this.handleSizeFilterChange.bind(this);
    }

    getSizes = () => {
        const { products } = this.props;
        const referenceOrder = ['XS', 'S', 'M', 'L', 'XL'];
        
        // get all available sizes based on each product available sizes.
        let availableSizes = [];
        availableSizes = _.reduce(products, (coll, product) => {
            // convert all sizes to upercase to avoid duplicate sizes with different caps (ie: m, M)
            coll.push(...product.size.map(s => s.toUpperCase()));
            // remove duplicates
            return _.uniq(coll);
        }, []);

        // finaly reorder the sizes based on a reference array and add 'ALL' to possible opt
        availableSizes.sort((a, b) => referenceOrder.indexOf(a) - referenceOrder.indexOf(b)).unshift('ALL');

        return availableSizes;
    }

    handleSizeFilterChange = currentSize => this.setState({ currentSize });

    render() {
        const { title } = this.props;
        const { products, currentSize } = this.state;

        const productList = products
                            .filter(product => (currentSize === 'ALL' ? product : _.includes(product.size, currentSize)))
                            .map(product => (<Card key={product.index} data={product} />));

        return (
            <div className={style.store}>
                <div className={style.mainTitle}>
                    {title}
                    <SizeFilter onChange={this.handleSizeFilterChange} sizes={this.getSizes()} />
                </div>
                <div>
                    {productList}
                </div>
            </div>
        );
    }
}
