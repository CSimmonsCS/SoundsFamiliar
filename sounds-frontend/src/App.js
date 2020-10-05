import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Description from './components/Description';
import Videos from './components/Videos';
import Buttons from './components/Buttons';
import Comments from './components/Comments';
import Footer from './components/Footer';
import AddSongModal from './components/AddSongModal';
import AddSongHome from './components/AddSongHome';

function App() {
  return (
    <div className="App">
      <Header/>
      <Description/>
      <Videos/>
      <Comments/>
      <Footer />
    </div>
  );
}

export default App;
