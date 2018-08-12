import React from 'react';
import {Button, ButtonToolbar, ButtonGroup, Glyphicon} from 'react-bootstrap';

const btnStyle = {
padding: ' 8px',
verticalAlign: 'middle',
color: 'white',
background: 'mediumvioletred',
fontSize: '16px',
};
const btn2Style = {
padding: ' 10px',
color: 'black',
background: 'darkcyan',
fontSize: '20px',
};

const btnOffStyle = {
padding: ' 8px',
verticalAlign: 'middle',
color: 'white',
background: 'black',
fontSize: '16px',
};

class JsButton extends React.Component {
  constructor(props) {
      super(props);
      this.ButtonStatus= "o0";
  }
   render() {
      return (
        <div>

        <ButtonToolbar >

          <ButtonGroup >
          <Button style={btnStyle}><Glyphicon style={btnStyle} glyph="adjust" /></Button>
          <Button style={btnStyle}><Glyphicon style={btnStyle} glyph="refresh" /></Button>

            <Button style={btnStyle}><Glyphicon style={btnStyle} glyph="qrcode" /></Button>

          </ButtonGroup>

          <ButtonGroup >
              <Button   style={btn2Style}>{this.ButtonStatus}</Button>
              <Button style={btnOffStyle}><Glyphicon style={btnOffStyle} glyph="off" /></Button>
                  </ButtonGroup>
        </ButtonToolbar>
        </div>
      );
   }
}

export default JsButton;
