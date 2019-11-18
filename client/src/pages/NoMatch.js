import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="12">
                    <Jumbotron>
                        <h1 className="text-white">
                            404 Page Not Found
                        </h1>
                        <hr/>
                        <h5>Try again please!</h5>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;