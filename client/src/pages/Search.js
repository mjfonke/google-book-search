  
import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../Components/Jumbotron";
import { Container, Row, Col } from "../Components/Grid";
import Form from "../Components/Form";
import Results from "../Components/Results";

class Search extends Component {
   
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };


    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        API.getGoogleBooks(this.state.search)
        .then(res => {
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            }
            else {
                let searchRes = res.data.items;
                searchRes = searchRes.map(data => {
                    data = {
                        key: data.id,
                        id: data.id,
                        title: data.volumeInfo.title,
                        author: data.volumeInfo.authors,
                        description: data.volumeInfo.description,
                        image: data.volumeInfo.imageLinks.thumbnail,
                        link: data.volumeInfo.infoLink
                    }

                    return data;
                })

                this.setState({ books: searchRes, error: ""})
            }
        })
        .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = id => {
        
        console.log(this.state.books)
        const savedBooks = this.state.books.find(book => book.id === id);
        console.log(API.saveBook)
        console.log(savedBooks)
        API.saveBook(savedBooks)
        .then(res => alert("This book is saved!"))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-center">Google Book Search</h1>
                    <p className="text-center">Find Your Favorite Books Here</p>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <Form
                            handleFormSubmit = {this.handleFormSubmit}
                            handleInputChange = {this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Results 
                    books={this.state.books} 
                    handleSavedButton = {this.handleSavedButton} 
                    />
                </Container>

            </Container>
        )
    }
}


export default Search;