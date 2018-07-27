import React from 'react';

class App1 extends React.Component {
   render() {
      return (
         <div>
            <Board2x2/>
         </div>
      );
   }
}

class Board2x2 extends React.Component {
   render() {
      return (
         <div>

            <button type="button" disabled={1}>A</button>
            <button type="button" disabled={0}>B</button>
            <br/>
            <button type="button" disabled={1}>C</button>
            <button type="button" disabled={1}>D</button>
         </div>
      );
   }
}
export default App1;
