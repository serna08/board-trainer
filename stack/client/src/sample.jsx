import React from 'react';
import Header from './header.jsx';

class App1 extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
            <p>button1</p>
            <button type="button" disabled={1}>A</button>
            <button type="button" disabled={0}>B</button>
            <br/>
            <button type="button" disabled={1}>C</button>
            <button type="button" disabled={1}>D</button>
            <p>turn</p>
         </div>
      );
   }
}
export default App1;
