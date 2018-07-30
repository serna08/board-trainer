import React from 'react';
import ReactDOM from 'react-dom';
import BoardSimple from './boardsimple.jsx';
import { Button, ButtonToolbar } from 'react-bootstrap';
import NavigationMenu from './navigation.jsx';
//import NavigationTabs from './tabs.jsx';
import App1 from './boardsimple.jsx';
import PyButton from './pythonclick.jsx';

import AppTemplate from './app_template.jsx';

const App = () => (
  <React.Fragment>

    <NavigationMenu />
    <App1 />

    <ButtonToolbar>
      <Button>reset</Button>
      <Button bsStyle="warning">nothing</Button>
    </ButtonToolbar>

    <AppTemplate />

    <PyButton/>


  </React.Fragment>
);

ReactDOM.render(<App/>, document.getElementById('content'));
