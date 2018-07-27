import React from 'react';
import Header from './header.jsx';
import {Nav, NavItem} from 'react-bootstrap';

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

class NavigationTabs extends React.Component {
   render() {
      return (
        <Nav bsStyle="tabs" activeKey={1}>
          <NavItem eventKey={1} >
            game_instance_1
          </NavItem>
          <NavItem eventKey={2} title="Item">
            add..
          </NavItem>
        </Nav>
      );
   }
}

export default NavigationTabs;
