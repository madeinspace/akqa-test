import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Container, Row, Col } from 'reactstrap';
import HelloWorld from './components/hello-world';
import './scss/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="app">
        <Row>
          <Col>
            <HelloWorld title="AKQA test" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default hot(module)(App);
