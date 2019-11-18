import axios from "axios";

export default {
    getGoogleBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    getAllBooks: function () {
        return axios.get("/api/books");
    },

    getOneBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    saveBook: function (saved) {
        return axios.post("/api/books", saved);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books" + id);
    }
}