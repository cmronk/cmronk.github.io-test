import React from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle>Mentor Up</CardTitle>
                                <CardText>Mentor pairing service geared towards forwarding women in tech.</CardText>
                                <Button color="secondary">Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle>Storyboard Adventures</CardTitle>
                                <CardText>Storybuilding app that allows users to collaborate.</CardText>
                                <Button color="secondary">Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle>VIKI</CardTitle>
                                <CardText>On screen piano keyboard with YouTube tutorials to follow along with.</CardText>
                                <Button color="secondary">Learn more</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cards;