import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Videos from './components/Videos';
import Buttons from './components/Buttons';
import Comments from './components/Comments';
import Footer from './components/Footer';
import AllSongs from './components/AllSongs';
import Search from './components/Search';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import {withRouter} from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
    }
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

  handle_signup = (e) => {
    e.preventDefault();
    // axios.post('http://localhost:8000/core/users/', this.state, {
    fetch('http://localhost:8000/core/users/', {
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
          // displayed_form: '',
          username: json.username
        });
        console.log(this.state.logged_in);
      });
  };

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  render(){
    return (
      <div className="App">
        <Router>
          <Header logged_in={this.state.logged_in} handle_logout={this.handle_logout}/>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route path="/all" component={withRouter(AllSongs)} />
            <Route path="/search" component={withRouter(Search)} />
            <Route
              path="/signin"
              render={(props) =>
                (<SignIn {...props} logged_in={this.logged_in} handle_login={this.handle_login}/>
              )}
            />
            <Route path="/signup" component={withRouter(SignUp)} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

const Home = () => (
  <div>
    <Description/>
    <Videos/>
    <Comments/>
  </div>
);

export default App;
