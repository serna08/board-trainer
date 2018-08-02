import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Navbar, 'custom');

function NavigationMenu() {
  return (
    <div>
    <style type="text/css">
    {`
      .nav-custom {
        color:"red";
      }
    `}
    </style>



    <Navbar bsStyle="custom" fixedTop inverse collapseOnSelect fluid>


      <Navbar.Header >
        <Navbar.Brand >
          <a href="/" >Snake Eyes</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

  <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
            Versus
          </NavItem>
          <NavItem eventKey={2}>
            Simulation
          </NavItem>
        </Nav>
        <Nav pullRight>
        <NavDropdown eventKey={3} title="Games" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Template</MenuItem>
          <MenuItem eventKey={3.2}>Tic Tac Toe</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Cards</MenuItem>
        </NavDropdown>
          <NavItem eventKey={1} href="#">
            Settings
          </NavItem>
          <NavItem eventKey={2} href="#">
            Profile
          </NavItem>
        </Nav>
        </Navbar.Collapse>

    </Navbar>
    </div>
  );
}

export default NavigationMenu;
