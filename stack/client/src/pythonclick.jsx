import React from 'react';
import {Button} from 'react-bootstrap';
import pressedButton from "./data/button_pressed.jsx";

class PyButton extends React.Component {
  constructor(props) {
      super(props);
      this.ButtonPressed= pressedButton;
  }

   render() {
      return (
        <div>
          <br/>
          <h4>Button Pressed? {this.ButtonPressed}</h4>
          <form method="post">
            <Button bsStyle="danger" type="submit">python</Button>
            </form>
        </div>
      );
   }
}

export default PyButton;
//TODO: fix button label to display server value of ButtonPressed @server.py
  //GET request and store in client/data/
  //log GET/POST to client console
