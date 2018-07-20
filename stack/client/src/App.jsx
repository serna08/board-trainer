import React from 'react';
import ReactDOM from 'react-dom';
import BoardSimple from './boardsimple.jsx';

const App = () => (
  <React.Fragment>
    <React.Fragment>
      <p>button1</p>
      <button type="button" disabled={1}>A</button>
      <button type="button" disabled={0}>B</button>
      <br/>
      <button type="button" disabled={1}>C</button>
      <button type="button" disabled={1}>D</button>
      <p>turn</p>
    </React.Fragment>
    <React.Fragment>
      <p>piece in B</p>
      <p>bla</p>
      <p>reset</p>
    </React.Fragment>
    <BoardSimple />
  </React.Fragment>
);

ReactDOM.render(<App/>, document.getElementById('content'));
