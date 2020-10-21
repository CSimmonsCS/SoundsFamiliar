import React from 'react';
import ReactDOM from 'react-dom';

import axios from "axios";

import { USER_URL } from "../constants";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  createUser = e => {
    e.preventDefault();
    console.log(this.state.username + ' has been added');
    axios.post(USER_URL, this.state).then(() => {
      // this.resetState();
    })
  };

  render () {
    return (
      <div className='SignUp'>
        <form onSubmit={this.createUser}>
          <h2>Sign Up</h2>
          <div className="song-form-text">
            <TextField name="email" fullWidth value={this.defaultIfEmpty(this.state.email)} onChange={this.onChange} required id="email" label="Email" />
          </div>
          <div className="song-form-text">
            <TextField name="username" fullWidth value={this.defaultIfEmpty(this.state.username)} onChange={this.onChange} required id="username" label="Username" />
          </div>
          <div className="song-form-text">
            <TextField name="password" type="password" fullWidth value={this.defaultIfEmpty(this.state.password)} onChange={this.onChange} required id="password" label="Password" />
          </div>
          <div className="song-form-text">
            <TextField name="confirm_password" type="password" fullWidth value={this.defaultIfEmpty(this.state.confirm_password)} onChange={this.onChange} required id="confirm_password" label="Confirm Password" />
          </div>
          <div className="sign-up-button">
            <Button type="submit" variant="contained">Sign Up</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
