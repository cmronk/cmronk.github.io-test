import React from 'react';
import { Container, Card, CardBody, CardTitle, Button, ButtonGroup, Row, Col } from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <h2 className="portfolio" id="portfolio">Portfolio</h2>
            <Container >
                <Row>
                    <Col sm="12">
                        <h4>Group Projects</h4>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-handshake-o" aria-hidden="true"></i> Mentor Up</CardTitle>
                            <CardBody>
                                <img src={require('../assets/mentorupdemo.gif')} height="200px" width="250px" alt="mentorup" />
                                <div className="app-info"><p>MERN app designed to further women in tech by promoting mentorship and community.</p></div>
                                <ButtonGroup>
                                    <Button a href="https://agile-caverns-57821.herokuapp.com/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/tenillez/MentorUp" target="_blank">View Code</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-book" aria-hidden="true"></i> Storyboard Adventures</CardTitle>
                            <CardBody>
                                <img src={require('../assets/story.png')} height="200px" width="250px" alt="storyboard" />
                                <div className="app-info"><p>MVC structured application that allows users to create and collaborate to write stories and chat.</p></div>
                                <ButtonGroup>
                                    <Button a href="https://storyboardadventures.herokuapp.com/dashboard" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/storyboard" target="_blank">View Code</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-music" aria-hidden="true"></i> VIKI</CardTitle>
                            <CardBody>
                                <img src={require('../assets/viki.png')} height="200px" width="250px" alt="viki" />
                                <div className="app-info"><p>Piano keyboard and a Youtube playlist to teach you piano via Tone.js & Youtube API.</p></div>
                                <ButtonGroup>
                                    <Button a href="https://cmronk.github.io/VIKI/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/VIKI" target="_blank">View Code</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <Col sm="12">
                        <h4>Applications Built</h4>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-flask" aria-hidden="true"></i> Science Scraper</CardTitle>
                            <CardBody>
                                <img src={require('../assets/scraperDemo.gif')} height="200px" width="250px" alt="mongoscraper" />
                                <div className="app-info"><p>MVC application that gathers Science Fiction articles from Popular Mechanics.</p></div>
                                <ButtonGroup>
                                    <Button a href="https://glacial-escarpment-81369.herokuapp.com/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/mongoscrape" target="_blank">View Code</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-mouse-pointer" aria-hidden="true"></i> Clicky</CardTitle>
                            <CardBody>
                                <img src={require('../assets/clicky.png')} height="200px" width="250px" alt="clicky" />
                                <div className="app-info"><p>Clicky is a Dr. Seuss themed React game designed to test your memory.</p></div>
                                <ButtonGroup>
                                    <Button a href="https://cmronk.github.io/clickyclickclickity/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/clickyclickclickity" target="_blank">View Code</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-file-video-o" aria-hidden="true"></i> Giphy</CardTitle>
                            <CardBody>
                                <img src={require('../assets/giphy1.gif')} height="200px" width="250px" alt="giphy" />
                                <div className="app-info"><p>Fetch Gifs from the catergories or create your own via the Giphy API.</p></div>
                                <ButtonGroup>
                                    <Button a href="https://cmronk.github.io/GifTastic/" target="_blank">View App</Button>
                                    <Button a href="https://github.com/cmronk/GifTastic" target="_blank">View Code</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <br />
                    <Col sm="12">
                        <h4>Command Line Node Apps</h4>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col lg="2" md="3"></Col>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> Bamazon</CardTitle>
                            <CardBody>
                                <img src={require('../assets/bamazon.gif')} height="200px" width="250px" alt="bamazon" />
                                <div className="app-info"><p>CLI application that allows users to view stock, purchase items, & order new items. </p></div>
                                <Button a href="https://github.com/cmronk/bamazon" target="_blank">View Code</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <CardTitle><i className="fa fa-list" aria-hidden="true"></i> LIRI</CardTitle>
                            <CardBody>
                                <img src={require('../assets/liri.gif')} height="200px" width="250px" alt="liri" />
                                <div className="app-info"><p>LIRI (Language Interpretation and Recognition interface) displays Tweets, OMDB and Spotify info. </p></div>
                                <Button a href="https://github.com/cmronk/liri-node-bot" target="_blank">View Code</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="2" md="3"></Col>
                </Row>

            </Container>
        </div >
    )
}

export default Cards;