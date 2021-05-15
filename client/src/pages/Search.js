import { query } from 'express';
import React from 'react';
import Form from '../components/Form';
import Results from '../components/Results';
import API from '../utils/API';

class Search extends React.Component {
    state = {
        value = "",
        books: []
    };
    componentDidMount() {
        this.searchBook();
    }
    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }
    searchBook = query => {
        API.getBook(query)
        .then(res => this.setState({ books : res.data.items.map(bookData => this.makeBook(bookData))}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };
}