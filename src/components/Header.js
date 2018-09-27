import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
    return (
        <div className="intro">
            <Jumbotron>
                <h1 className="display-3">Christine M Ronk</h1>
                <p className="lead">Full Stack Web Developer armed with coffee</p>
                <Button color="secondary">Caffeinate! <i className="fa fa-coffee" aria-hidden="true"></i></Button>
            </Jumbotron>
        </div>
    )
}

export default Header;