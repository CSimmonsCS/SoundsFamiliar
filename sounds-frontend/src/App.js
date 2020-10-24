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

  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route path="/all" component={withRouter(AllSongs)} />
            <Route path="/search" component={withRouter(Search)} />
            <Route path="/signin" component={withRouter(SignIn)} />
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
