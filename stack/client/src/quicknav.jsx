import React from 'react';
import NavigationMenu from './navigation.jsx';
import {ButtonToolbar, Button, ButtonGroup, Dropdown, MenuItem, Glyphicon} from 'react-bootstrap';


const quickStyle = {
  float: 'right',
  position: 'fixed',
  bottom: '0px',
  right: '0px',
  padding: ' 10px',
};

const btnStyle = {
padding: ' 10px',
};

const btnGStyle = {
fontSize: '27px',
padding: ' 5px',
};

const pinkStyle = {
color: 'fuchsia',
};

const crazyStyle = {
background: 'fuchsia',
color: 'cyan',
};


const listStyle = {
background: 'black',
};

class QuickNav extends React.Component {
   render() {
      return (
        <div>
<ButtonToolbar >
        <Dropdown dropup id="dropdown-custom-1">
<Dropdown.Toggle bsStyle="danger" >
          mix<Glyphicon style={btnStyle} glyph="star" />
</Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <MenuItem eventKey="1">zzxx</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>

        <ButtonToolbar style={quickStyle}>
          <Dropdown dropup id="dropdown-custom-2">
            <Dropdown.Toggle noCaret >
              <Glyphicon glyph="flash" style={btnGStyle} />
            </Dropdown.Toggle>
            <Dropdown.Menu style={listStyle}>
              <ButtonGroup  vertical>
              <Button method="post" bsStyle="danger" style={btnStyle}><Glyphicon glyph="tint" style={btnStyle}/></Button>
              <Button bsStyle="info" style={btnStyle}><Glyphicon glyph="star" style={btnStyle}/></Button>
              <Button style={crazyStyle}><Glyphicon glyph="picture" style={crazyStyle}/></Button>
              <Button style={btnStyle}><Glyphicon glyph="qrcode" style={pinkStyle}/></Button>
              </ButtonGroup>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonToolbar>
        </div>
      );
   }
}
export default QuickNav;
