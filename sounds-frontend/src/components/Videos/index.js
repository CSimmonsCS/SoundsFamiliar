import React from 'react';
import ReactDOM from 'react-dom';

import axios from "axios";

import { API_URL } from "../constants";

class Videos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      randomNum: 0,
      randomSong: {},
    };
  }

  componentDidMount(){
    axios.get(API_URL)
      // .then(res => this.setState({ songs: res.data }, () => console.log(this.state.songs)));
      .then(
        res => this.setState({ songs: this.state.songs.concat(res.data) },
          () => this.setState({randomNum: Math.floor(Math.random() * this.state.songs.length)},
            () => this.setState({randomSong: this.state.songs[this.state.randomNum]}, () => console.log(this.state.randomSong))
              )));

      // .then(res => console.log(res.data));
  }

  randomSong = () => {
    var chosenRandomSong = this.state.songs[Math.floor(Math.random() * this.state.songs.length)];
    this.setState({randomSong : chosenRandomSong});
    console.log(this.state.randomSong);
    return this.state.randomSong;
  };


  render () {
    return (
      <div className='Videos'>
        <div className="song-container">
          <div className="left-side">
            <div className="title-likes-container">
              <h3>Song</h3>
              <div className="likes-container">
                <div className="likes-number">
                  <a href="#">&hearts;</a> { this.state.randomSong.song_likes }
                </div>
              </div>
            </div>
            <h2>{ this.state.randomSong.song_title }</h2>
            <h4>{ this.state.randomSong.song_artist }</h4>
            <div className="time-stamp-container">
              <div className="time-stamp">
                <a href="#">{ this.state.randomSong.song_time_stamp }</a>
              </div>
            </div>
            <div className="song-video">
              <iframe title="song" width="560" height="315"
                src={this.state.randomSong.song_address}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="right-side">
            <div className="title-likes-container">
              <h3>Sampled</h3>
              <div className="likes-container">
                <div className="likes-number">
                  <a href="#">&hearts;</a> { this.state.randomSong.sampled_likes }
                </div>
              </div>
            </div>
            <h2>{ this.state.randomSong.sampled_title }</h2>
            <h4>{ this.state.randomSong.sampled_artist }</h4>
            <div className="time-stamp-container">
              <div className="time-stamp">
                <a href="#">{ this.state.randomSong.sampled_time_stamp }</a>
              </div>
            </div>
            <div className="sampled-video">
              <iframe title='sampled'width="560" height="315"
                      src={this.state.randomSong.sampled_address}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
              </iframe>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
