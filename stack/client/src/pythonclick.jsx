import React from 'react';
import {Button} from 'react-bootstrap';

const btnStyle = {
  padding: '20',
  margin: '10',
};

class PyButton extends React.Component {
   render() {
      return (
        <div>
          <form method="post">
            <Button style={btnStyle}   bsStyle="danger" type="submit">kill ^X</Button>
            </form>
        </div>
      );
   }
}

export default PyButton;
//TODO: fix button label to display server value of ButtonPressed @server.py
  //GET request and store in client/data/
  //log GET/POST to client console
