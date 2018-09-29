import React from 'react';
import { Jumbotron, Container, Card, CardTitle, CardBody, Row, Col } from 'reactstrap';

const Header = (props) => {
    return (
        <div className="intro">
            <Jumbotron id="about">
                <Container id="intro">

                    <Row>
                        <Col sm="12">
                            <h2>About Me</h2>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8">
                            <h4>I am a Full Stack Web Developer with a focus on serving people. Armed with coffee, I aim to
                            solve real world problems, as well as develop and entertain with creativity.</h4>
                        </Col>
                        <Col sm="4">
                            <img src={require('../assets/headshot.JPG')} height="250px" width="200px" id="headshot" alt="headshot" />
                        </Col>

                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Header;