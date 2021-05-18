import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
import Card from '../Components/Card';
import Form from '../Components/Form';
import Book from '../Components/Book';
import { Col, Row, Container } from '../Components/Grid';
import { List } from '../Components/List';
import API from '../utils/API';
import './style.css';

class SearchBooks extends Component {
	
	state = {
		books: [],
		q: '',
		message: 'Search For A Book!',
	};

	handleInputChange = (event) => {
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

	handleFormSubmit = (event) => {
		event.preventDefault();

	
		this.getBooks();
	};


	handleBookSave = (id) => {
		const book = this.state.books.find((book) => book.id === id);

		API.saveBook({
			googleId: book.id,
			title: book.volumeInfo.title,
			subtitle: book.volumeInfo.subtitle,
			link: book.volumeInfo.infoLink,
			authors: book.volumeInfo.authors,
			description: book.volumeInfo.description,
			image: book.volumeInfo.imageLinks.thumbnail,
		}).then(() => this.getBooks());
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
										<strong style={{color:'white'}}>
											Google Books Search
										</strong>
									</h1>
								</Jumbotron>
							</Col>
							<Col size="md-12">
								{/* Book Search Form */}
								<Card
									title=" Book Search"
									icon="far fa-book"
								>
									<Form
										handleInputChange={
											this.handleInputChange
										}
										handleFormSubmit={
											this.handleFormSubmit
										}
										q={this.state.q}
									/>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col size="md-12">
								{/* Search Results Card */}
								<Card title="Search Results">
									{this.state.books.length ? (
										<List>
											{this.state.books.map(
												(book) => (
													<Book
														key={ book.id }
														title={	book.volumeInfo.title }
														subtitle={ book.volumeInfo.subtitle }
														link={ book.volumeInfo.infoLink }
														authors={book.volumeInfo.authors.join(', ')}
														description={ book.volumeInfo.description }
														image={ book.volumeInfo.imageLinks.thumbnail }
														Button={() => (
															<button
																onClick={() => this.handleBookSave( book.id )}
																className="btn btn-primary ml-2" >
																Save
															</button>
														)}
													/>
												)
											)}
										</List>
									) : (
										<h5 className="text-center">
											{this.state.message}
										</h5>
									)}
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