import React from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem
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
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Christine Ronk</NavbarBrand>
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
                            <NavLink href="https://docs.google.com/document/d/e/2PACX-1vQD6Diotsu4XK6Fo1H78PtPinYU1aDxbH_cm_Wat88TGQxPF_yuPSLvkGaEBpCAWiQ2nFHonRU8MsAu/pub" target="_blank">Resume</NavLink>
                            </NavItem>

                            {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}