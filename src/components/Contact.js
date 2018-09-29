import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Contact extends React.Component {
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
        <Navbar color="dark" dark expand="md" id="contact">
        <NavbarBrand href="/">Contact & Connect </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink a href="mailto:your-email@your-domain.com">christinemronk@gmail.com <i className="fa fa-envelope-o" aria-hidden="true"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/cmronk"><i className="fa fa-github" aria-hidden="true"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/christine-ronk-61244b152/"><i className="fa fa-linkedin" aria-hidden="true"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://stackexchange.com/users/12928161/christine-ronk"><i className="fa fa-stack-overflow" aria-hidden="true"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com/MeanChristine4"><i className="fa fa-twitter" aria-hidden="true"></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}