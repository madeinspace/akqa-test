import React, { Component } from 'react';
import includes from 'lodash/includes';
import reduce from 'lodash/reduce';
import uniq from 'lodash/uniq';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Row,
} from 'reactstrap';
import style from './store.scss';
import SizeFilter from '../size-filter';
import Card from '../card';
import images from '../products-images';

class Store extends Component {
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
        availableSizes = reduce(products, (coll, product) => {
            // convert all sizes to upercase to avoid duplicate sizes with different caps (ie: m, M)
            coll.push(...product.size.map(s => s.toUpperCase()));
            // remove duplicates
            return uniq(coll);
        }, []);

        // finaly reorder the sizes based on a reference array and add 'ALL' to possible opt
        availableSizes.sort((a, b) => referenceOrder.indexOf(a) - referenceOrder.indexOf(b)).unshift('ALL');

        return availableSizes;
    }

    handleSizeFilterChange = currentSize => this.setState({ currentSize });

    render() {
        const { title } = this.props;
        const { products, currentSize } = this.state;
        // filter products based on selected size.
        const productList = products
                            .filter(product => (currentSize === 'ALL' ? product : includes(product.size, currentSize)))
                            .map(product => (
                            <Card
                                key={product.index}
                                product={product}
                                imgUrl={images[product.productImage]} />));

        return (
            <div className={style.store}>
                <Navbar className={style.mainNav} color="light" light expand="md">
                    <NavbarBrand href="/">
                        <h1 className={style.title}>
                            {title}
                        </h1>
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <SizeFilter
                            onChange={this.handleSizeFilterChange}
                            sizes={this.getSizes()} />
                    </Nav>
                </Navbar>
                <Row className="no-gutters">
                    {productList}
                </Row>
            </div>
        );
    }
}

export default Store;
