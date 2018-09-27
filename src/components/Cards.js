import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="12">
                        <h3>Group Projects</h3>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-arrow-up" aria-hidden="true"></i> Mentor Up</CardTitle>
                            <CardBody>
                                <img src={require('../assets/mentor.png')} height="200px" width="250px" alt="books" />
                                <CardText>Mentor pairing service geared towards forwarding women in tech.</CardText>
                                <Button color="secondary">Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-book" aria-hidden="true"></i> Storyboard Adventures</CardTitle>
                            <CardBody>
                                <img src={require('../assets/story.png')} height="200px" width="250px" alt="books" />
                                <CardText>Storybuilding app that allows users to collaborate and gather inspiration.</CardText>
                                <Button color="secondary">Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-music" aria-hidden="true"></i> VIKI</CardTitle>
                            <CardBody>
                                <img src={require('../assets/viki.png')} height="200px" width="250px" alt="books" />
                                <CardText>On screen piano keyboard with YouTube tutorials to follow along with.</CardText>
                                <Button color="secondary">Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <Col sm="12">
                        <h3>Applications Built</h3>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cards;