import React from 'react';
import ReactDOM from 'react-dom';
import AppTemplate from './app_template.jsx';

const App = () => (
  <React.Fragment>

    <AppTemplate />


  </React.Fragment>
);

ReactDOM.render(<App/>, document.getElementById('content'));
