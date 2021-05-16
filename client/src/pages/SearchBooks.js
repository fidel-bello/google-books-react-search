import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import './style.css'
import Card from '../components/Card';
import Form from '../components/Form';

// Search Books class component
class SearchBooks extends Component {
    render() {
        return (
            <>
                <br />
                <br />
                {/* Container */}
                <Container>
                    <div className="main-container">
                        <Row>
                            <Col size="md-12">
                                {/* Jumbotron */}
                                <Jumbotron>
                                    <h1 className="text-center">
                                        <strong style={{ color: 'white' }}>
                                        Google Books Search
										</strong>
                                    </h1>
                                </Jumbotron>
                            </Col>
                            <Col size="md-12">
                                {}
                                <Card
									title=" Book Search"
									icon="far fa-book"
								>
                                   <Form /> 
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                            </Col>
                        </Row>
                        <br />
                    </div>
                    <br />
                </Container>
                <br />
            </>
        );
    }
}

export default SearchBooks;