import React from 'react';
import Images from './Images';

class GameBoard extends React.Component {
  renderImages (i) {
    return (
      <Images
        value={this.props.value}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render () {
    return (
      <div>
        <div className="board-row">
          {this.renderImages(0)}
          {this.renderImages(1)}
          {this.renderImages(2)}
        </div>
        <div className="board-row">
          {this.renderImages(3)}
          {this.renderImages(4)}
          {this.renderImages(5)}
        </div>
        <div className="board-row">
          {this.renderImages(6)}
          {this.renderImages(7)}
          {this.renderImages(8)}
        </div>
      </div>
    );
  }
}

export default GameBoard;
