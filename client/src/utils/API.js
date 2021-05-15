import axios from 'axios';

export default {
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books" + id).then(result => result.data);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData).then(result => result.data);
    },

    savedBooks: function () {
        return axios.get("/api/books").then(result => result.data);
    }
}