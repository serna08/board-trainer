import React from 'react';
import GameForm from './gameform.jsx'

const tileStyle = {
  font: 'Futura',
  fontSize: '50',
  height: '32vw',
  width: '32vw',
  maxWidth: '120',
  maxHeight:'120',
  verticalAlign: 'top',
  background: 'radial-gradient(rgba(160,160,150,0.2), rgba(55,55,55,0.6))',
  color: 'white',
  border: 'double',
  borderColor:'black'
};
const boardStyle = {

  padding: '0',
  margin: 'auto',
};

function Square(props) {
  return (
    <button style={tileStyle} className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick;
  }
  handleClick(e) {
    console.log('intention: ',e);
    fetch("/", {
    method: 'POST',
    headers: {
      'hash': '0x99'

    },
     body: JSON.stringify({
    deal: e,
    auth: 'midnight',
  })
})
.then(function (data) {
  console.log('post success: ', data);
})
.catch(function (error) {
  console.log('post failure: ', error);
});
fetch('/')
.then(function (data) {
  console.log('fetch success: ', data);
})
.catch(function (error) {
  console.log('fetch failure: ', error);
});
}
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (

      <div onClick={this.handleClick(this.props.squares)} style={boardStyle}>
        <GameForm />
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>

        </div>
      </div>
    );
  }
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log('winner');
      return squares[a];
    }
  }
  return null;
}
export default Game;
