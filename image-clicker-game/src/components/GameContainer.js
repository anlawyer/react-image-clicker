import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import GameBoard from './GameBoard';

class GameContainer extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Header />
        <div className='container'>
          <div className='row justify-content-center'>
            <GameBoard />
          </div>
        </div>
      </div>
    );
  }
}

export default GameContainer;
