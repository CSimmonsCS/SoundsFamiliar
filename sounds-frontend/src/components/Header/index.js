import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Header extends React.Component {
  render () {
    return (
      <div className='Header'>
        <header>
            <nav>
              <div className="logo">
                <Link to="/">SoundsFamiliar?</Link>
              </div>
              <ul>
                <li><Link to="/all">All Songs</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/search">Search</Link></li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}

export default Header;
