import React from "react";
import {Row, Col} from "../Grid"

function SavedResults (props) {
    return (
        <div className="card">
            <div className="card-header">
                Saved Books
            </div>
            <div className="card-body">
                {props.savedBooks.map(saved => {
                    return (
                        <li className="list-group-item">
                            <Row className="row" id={saved.title + "Card"} key={saved._id}>
                                <Col size="2" className="bookImage">
                                    <img src={saved.image} alt={saved.title} />

                                </Col>
                                <Col size="10" className="bookInfo">
                                    <div><h4 className="bookTitle">{saved.title}</h4></div>
                                    <div><p className="bookAuthor">{saved.author}</p></div>
                                    <div><p className="bookDescription">{saved.description}</p></div>
                                </Col>
                            </Row>
                            <Row className="row">
                                <button className="deleteBook btn btn-primary" id={saved.id} onClick={() => props.handleDeleteButton(saved._id)}>
                                    Delete This Book
                                </button>
                                <a href={saved.link}>
                                <button className="viewBook btn btn-primary">
                                    View This Book
                                </button>
                                </a>
                            </Row>
                        </li>
                    );
                })}
            </div>
        </div>
    )
}

export default SavedResults;