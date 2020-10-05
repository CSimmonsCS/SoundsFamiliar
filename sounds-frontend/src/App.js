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

import { API_URL } from "../constants";

function App() {
  var data = {
              sample:{title:'No Guidance',
                      likes:'11',
                      artist:'Chris Brown',
                      time_stamp:'1:03',},
              original:{title:'Before I Die',
                        likes:'6',
                        artist:'Che Ecru',
                        time_stamp:'3:22',},
            };
  return (
    <div className="App">
      <Header/>
      <Description/>
      <Videos data={data}/>
      <Comments/>
      <Footer />
    </div>
  );
}

export default App;
