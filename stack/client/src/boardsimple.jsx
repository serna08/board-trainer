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

const tileStyle = {
  height: '50px',
  width: '50px',
  verticalAlign: 'top'
};

const boardStyle = {
  padding: '10px'
};

class Board2x2 extends React.Component {
   render() {
      return (
         <div style={boardStyle}>
            <button style={tileStyle} type="button" disabled={1}></button>
            <button style={tileStyle} type="button" disabled={0}></button>
            <br/>
            <button style={tileStyle} type="button" disabled={1}>o</button>
            <button style={tileStyle} type="button" disabled={1}></button>
         </div>
      );
   }
}
export default App1;
