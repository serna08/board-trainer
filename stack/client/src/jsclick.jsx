import React from 'react';
import {Button} from 'react-bootstrap';

class JsButton extends React.Component {
  constructor(props) {
      super(props);
      this.ButtonPressed= "22";
  }
   render() {
      return (
        <div>
          <br/>
          <h4>status: {this.ButtonPressed}</h4>
          <form>
            <Button bsStyle="danger">js</Button>
            </form>
        </div>
      );
   }
}

export default JsButton;
