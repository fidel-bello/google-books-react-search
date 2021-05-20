import React, { Component } from "react";
import Jumbotron from '../Components/Jumbotron';
import Card from '../Components/Card';
import Book from '../Components/Book';
import API from '../utils/API'
import { Col, Row, Container } from '../Components/Grid';
import { List } from '../Components/List';

import './style.css';

class SavedBooks extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }



  getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
  };

  render() {
    return (
      <>

        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">
                  <strong style={{ color: 'white' }}> Google Books Search</strong>
                </h1>
                <h2 className="text-center" style={{ color: 'white' }}>Search for favorite books or books that you would like to read.</h2>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Saved Books" icon="download">
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map((book) => (
                      <Book
                        key={book._id}
                        title={book.title}
                        subtitle={book.subtitle}
                        link={book.link}
                        authors={book.authors.join(", ")}
                        description={book.description}
                        image={book.image}
                        Button={() => (
                          <button
                            onClick={() => this.handleBookDelete(book._id)}
                            className="button ml-2"
                          >
                            Delete
                          </button>
                        )}
                      />
                    )
                    )}
                  </List>
                ) : (
                  <h2 className="text-center">No Saved Books</h2>
                )}
              </Card>
            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default SavedBooks;