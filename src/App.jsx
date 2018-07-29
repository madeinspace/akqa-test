import React from 'react';
import { hot } from 'react-hot-loader';
import { Container, Row, Col } from 'reactstrap';
import Store from './components/store';
import './scss/main.scss';
import data from './data/products.json';

const App = () => (
  <Container className="app">
    <Row>
      <Col>
        <Store title="Woman's tops" products={data} />
      </Col>
    </Row>
  </Container>
);

export default hot(module)(App);
