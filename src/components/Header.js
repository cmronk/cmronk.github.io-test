import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Christine M Ronk</h1>
                <p className="lead">Full Stack Web Developer armed with coffee</p>
                <Button color="secondary">Caffeinate!</Button>
            </Jumbotron>
        </div>
    )
}

export default Header;