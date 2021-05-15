import React, { Component } from 'react';
import API from '../../utils/API';

class Results extends Component {
    state = {
        savedBooks: [],
    }
    componentDidMount() {
        API.savedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        .catch(err => console.log(err));
    }
}