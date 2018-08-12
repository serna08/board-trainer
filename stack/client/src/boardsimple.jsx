import React from 'react';

class App1 extends React.Component {
   render() {
      return (
         <div>
            <Board3x3/>
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
  padding: '5px'
};

class Board3x3 extends React.Component {
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
              <button style={tileStyle} type="button" disabled={0}>i</button>
              <button style={tileStyle} type="button" disabled={0}></button>
              <button style={tileStyle} type="button" disabled={0} onClick={this.handleClick}>
                act</button>
              <br/>
              <button style={tileStyle} type="button" disabled={1}>o</button>
              <button style={tileStyle} type="button" disabled={1}>x</button>
              <button style={tileStyle} type="button" disabled={1}>o</button>
              <br/>
              <button style={tileStyle} type="button" disabled={1}>b</button>
              <button style={tileStyle} type="button" disabled={1}>o</button>
              <button style={tileStyle} type="button" disabled={1}>x</button>

         </div>
      );
   }
}
export default App1;
