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
  height: '80px',
  width: '80px',
  verticalAlign: 'top'
};

const boardStyle = {
  padding: '15px'
};

class Board2x2 extends React.Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}
handleClick() {
    console.log('Click happened');
  }
   render() {
      return (
         <div style={boardStyle}>
            <button style={tileStyle} type="button" disabled={1}></button>
            <button style={tileStyle} type="button" disabled={0} onClick={this.handleClick}>
              active</button>
            <br/>
            <button style={tileStyle} type="button" disabled={1}>o</button>
            <button style={tileStyle} type="button" disabled={1}></button>

         </div>
      );
   }
}
export default App1;
