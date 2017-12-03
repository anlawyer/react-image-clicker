import React from 'react';

class Images extends React.Component {
  state = {}

  render () {
    return (
      <button className='square' onClick={() => alert('click')}>
        <img src='http://via.placeholder.com/200x200' alt=''></img>
        {this.state.value}
      </button>
    );
  }
}

export default Images;
