import axios from 'axios';

export default {
    getBooks: function(q) {
        return axios.get("/api/google", { params: { q: "title:" + q }});
    },

    getSavedBooks: function(id) {
        return axios.get("/api/books" + id);
    },

    deleteBooks: function(bookData) {
        return axios.delete(".api/books", bookData)
    }
}