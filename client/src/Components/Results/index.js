import React from "react";
import {Row, Col} from "../Grid";

function Results (props) {
    return (
       <div className="card">
           <div className="card-header">
               Search Results
           </div>
           <div className="card-body">
            {props.books.map(book => {
                return (
                <li className="list-group-item">
                    <Row className="row" id={book.title + "Card"} key={book._id}>
                        <Col size="2" className="bookImage">
                            <img src={book.image} alt={book.title} />
                        </Col>
                        <Col size="10" className="bookInfo">
                            <div><h4 className="bookTitle">{book.title}</h4></div>
                            <div><p className="bookAuthor">{book.author}</p></div>
                            <div><p className="bookDescription">{book.description}</p></div>
                        </Col>
                    </Row>

                    <Row className="row">
                        <button className="btn btn-success float-right" data-id={book.id} onClick={() => props.handleSavedButton(book.id)}>
                           Save
                        </button>
                        <a href={book.link}>
                            <button className="btn btn-success ml-2 float-right">
                                View
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

export default Results;