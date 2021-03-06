import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../Components/Jumbotron";
import { Container } from "../Components/Grid";
import SavedResults from "../Components/SavedResults";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getAllBooks()
        .then(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                <h1 className="text-center">Google Book Search</h1>
                <p className="text-center">Here are your saved books</p>
                </Jumbotron>
                <Container>
                    <SavedResults 
                    savedBooks={this.state.savedBooks}
                    handleDeleteButton={this.handleDeleteButton}
                    />
                </Container>
            </Container>
        )
    }
};

export default Saved;