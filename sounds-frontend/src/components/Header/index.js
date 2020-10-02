import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <header>
          <nav>
            <div className="logo">
              <a href="#">SoundsFamiliar?</a>
            </div>
            <ul>
              <li><a href="#">All Songs</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Search</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
