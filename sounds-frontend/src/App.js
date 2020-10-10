import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Videos from './components/Videos';
import Buttons from './components/Buttons';
import Comments from './components/Comments';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/">
            <Description/>
            <Videos/>
            <Comments/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
