import React from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    NavItem, NavLink
} from 'reactstrap';

export default class TopNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="fixed-top" dark expand="md">
                    <NavbarBrand >Christine Ronk</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#about">About</NavLink>
                            </NavItem>
                            <NavLink href="#portfolio">Portfolio</NavLink>
                            <NavItem>
                                <NavLink href="#contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://docs.google.com/document/d/1siBmoYieam5fV0oD1zEMSMC1ITXz-QTa3gmkLMb9Plk/edit?usp=sharing" target="_blank">Resume</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}