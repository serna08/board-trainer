import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav, Button, Glyphicon} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Navbar, 'custom');

const iconStyle ={
  color: 'deeppink',
  verticalAlign: 'middle'
};

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
    <Navbar  fixedTop inverse collapseOnSelect fluid>


      <Navbar.Header >
        <Navbar.Brand >
          <a href="/" >
          Snake Eyes <Glyphicon style={iconStyle} glyph="glass" /></a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

  <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>
          quickstart_
          <Glyphicon style={iconStyle} glyph="dashboard" />
          </NavItem>
        </Nav>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">

        settings_
        <Glyphicon style={iconStyle} glyph="cog" />

        </NavItem>
        <NavDropdown eventKey={3} title="games" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><Glyphicon glyph="tower" />Tic Tac Toe</MenuItem>
        </NavDropdown>


        </Nav>
        </Navbar.Collapse>

    </Navbar>
    </div>
  );
}

export default NavigationMenu;
