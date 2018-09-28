import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const Header = (props) => {
    return (
        <div className="intro">
            <Jumbotron id="about">
                <Container id="intro">
                    <h2>About Me</h2>
                    <hr />
                    <p>Hello, I am a Full Stack Web Developer with a focus on serving people. Armed with coffee, I aim to
                            solve real world problems, as well as develop and entertain with creativity.</p>

                </Container>
            </Jumbotron>
        </div>
    )
}

export default Header;