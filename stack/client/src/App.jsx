import React from 'react';
import ReactDOM from 'react-dom';
import BoardSimple from './boardsimple.jsx';
import { Button } from 'react-bootstrap';
import NavigationMenu from './navigation.jsx';
import App1 from './boardsimple.jsx';
import PyButton from './pythonclick.jsx';
import AppTemplate from './app_template.jsx';

const App = () => (
  <React.Fragment>

    <AppTemplate />

    <Button bsStyle="warning">nothing</Button>
    <PyButton/>

  </React.Fragment>
);

ReactDOM.render(<App/>, document.getElementById('content'));
