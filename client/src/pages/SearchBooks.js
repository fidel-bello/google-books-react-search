import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import './style.css'
import Card from '../components/Card';
import Form from '../components/Form';
import { List } from '../components/List';
import Book from '../components/Book';
import API from '../utils/API';

// Search Books class component
class SearchBooks extends Component {
    state = {
        books: [],
        q: '',
        message: 'Search for book!',
    };

    handleInputChange = (e) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
            .then((res) =>
                this.setState({
                    books: res.data,
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: 'No Books Found!',
                })
            );
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.getBooks();
    };

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
                                { }
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
                                { }
                                <Card>
                                    <List>
                                        {this.state.books.map(
                                            (book) => (
                                                <Book
                                                    key={book.id}
                                                    title={book.volumeInfo.title}
                                                    subtitle={book.volumeInfo.subtitle}
                                                    link={book.volumeInfo.infoLink}
                                                    authors={book.volumeInfo.authors.join(', ')}
                                                    description={book.volumeInfo.description}
                                                    image={book.volumeInfo.imageLinks.thumbnail}
                                                    Button={() => (
                                                        <button
                                                            onClick={() => this.handleBookSave(book.id)}
                                                            className="btn btn-primary ml-2" >
                                                            Save
                                                        </button>
                                                    )}
                                                />
                                            )
                                        )}
                                    </List>
                                </Card>
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