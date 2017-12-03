import React from 'react';

const Nav = props =>
  <div>
    <div className='container'>
      <ul className='nav row justify-content-between'>
        <li className='nav-item'>
          <a className='nav-link active'>Image Clicker</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'>Guess</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'>Score</a>
        </li>
      </ul>
    </div>
  </div>;

export default Nav;
