import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import { USER_URL } from "../constants";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      logged_in: localStorage.getItem('token') ? true : false,
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  handle_login = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  render () {
    return (
      <div className='SignUp'>
        {this.state.logged_in ? "Yes" : "No"}
        <form onSubmit={this.handle_login}>
          <h2>Sign In</h2>
          <div className="song-form-text">
            <TextField name="username" fullWidth value={this.defaultIfEmpty(this.state.username)} onChange={this.onChange} required id="username" label="Username" />
          </div>
          <div className="song-form-text">
            <TextField name="password" type="password" fullWidth value={this.defaultIfEmpty(this.state.password)} onChange={this.onChange} required id="password" label="Password" />
          </div>
          <div className="sign-up-button">
            <Button type="submit" variant="contained">Sign In</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
