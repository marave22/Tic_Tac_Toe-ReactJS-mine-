import React from 'react';
import './GameSquare.css';

class GameSquare extends React.Component {

    render() {
        return (
            <div>
                <div className="btn border border-secondary"
                     onClick={this.props.onClick}>
                    {this.props.value}
                </div>
            </div>
        )
    };
}


export default GameSquare;