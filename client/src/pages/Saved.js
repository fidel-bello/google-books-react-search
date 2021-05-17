import React, {Component} from 'react';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import Book from '../components/Book';
import API from '../utils/API';
import {Col, Row, Container } from '../components/Grid';
import { List } from "../components/List";

class SavedBooks extends Component {
    state ={
        books: [],
    };
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
}