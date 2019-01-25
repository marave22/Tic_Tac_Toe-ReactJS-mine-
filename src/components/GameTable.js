import React from 'react';
import GameSquare from './GameSquare';
import './GameTable.css';

class GameTable extends React.Component {
    state = {
        X: 'X',
        O: 'O',
        square: Array(9).fill(null),
        next: true,
        lines: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 8],
            [2, 4, 6]
        ]
    };

    handleSwitchTurn = (i) => {
        let squares= this.state.square.slice();
        if (this.checkWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.next ? this.state.X : this.state.O;
        this.setState({
            square: squares,
            next: !this.state.next
        })
    };

    checkWinner = (squares) => {
        for (let i = 0; i < this.state.lines.length; i++) {
            const [a, b, c] = this.state.lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    restartGame = () => {
        this.setState({
            square: Array(9).fill(null),
            next: true
        })
    };

    render() {
        let winner = this.checkWinner(this.state.square);
        let status;
        if (winner) {
            status = 'Winner ' + winner;
        } else {
            status = `Next Player: ${(this.state.next) ? this.state.X : this.state.O}`;
        }

        return (
            <div>
                <div  className="container">
                    <div className="status">{status}</div>
                    <div
                        className="row">
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(0)}
                            value={this.state.square[0]}/>
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(1)}
                            value={this.state.square[1]}/>
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(2)}
                            value={this.state.square[2]}/>
                    </div>
                    <div className="row">
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(3)}
                            value={this.state.square[3]}/>
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(4)}
                            value={this.state.square[4]}/>
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(5)}
                            value={this.state.square[5]}/>
                    </div>
                    <div className="row">
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(6)}
                            value={this.state.square[6]}/>
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(7)}
                            value={this.state.square[7]}/>
                        <GameSquare
                            onClick={() => this.handleSwitchTurn(8)}
                            value={this.state.square[8]}/>
                    </div>
                    <div
                        className="restart btn btn-secondary"
                        onClick={this.restartGame}>
                        Start again
                    </div>
                </div>
            </div>
        );
    }
}

export default GameTable;
