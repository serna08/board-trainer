import React from 'react';
import ReactDOM from 'react-dom';
import BoardSimple from './boardsimple.jsx';
import { Button, ButtonToolbar } from 'react-bootstrap';
import NavigationMenu from './navigation.jsx';
//import NavigationTabs from './tabs.jsx';
import App1 from './boardsimple.jsx';
import PyButton from './pythonclick.jsx';

const App = () => (
  <React.Fragment>

    <NavigationMenu />
    <App1 />

    <br />
    <ButtonToolbar>
      <Button>reset</Button>
      <Button bsStyle="warning">python</Button>
    </ButtonToolbar>

    <PyButton/>


  </React.Fragment>
);

ReactDOM.render(<App/>, document.getElementById('content'));
