import React from 'react';
import ReactDOM from 'react-dom';

import axios from "axios";

import { API_URL } from "../constants";

import YouTube from "react-youtube";

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
    //HTTP get all the songs,
    //concatenates songs to state.songs,
    //gets random number based on songs array length,
    //sets state.randomSong to state.songs[randomNum]
    axios.get(API_URL)
      // .then(res => this.setState({ songs: res.data }, () => console.log(this.state.songs)));
      .then(
        res => this.setState({ songs: this.state.songs.concat(res.data) },
          () => this.setState({randomNum: Math.floor(Math.random() * this.state.songs.length)},
            () => this.setState({randomSong: this.state.songs[this.state.randomNum]}, () => console.log(this.state.randomSong))
              )));

      // .then(res => console.log(res.data));
  }

  handleLikeClickSong = () => {
    //sets temp obj to randomSong, changes song_likes variable then setState for randomSong to tempSong obj
    var tempSong = this.state.randomSong;
    tempSong.song_likes += 1;
    // console.log(tempSong.song_likes);
    this.setState({randomSong: tempSong});
    axios.put(API_URL + this.state.randomSong.id, this.state.randomSong).then(() => {
      console.log(this.state.randomSong.song_likes);
    });
  }

  handleLikeClickSampled = () => {
    //sets temp obj to randomSong, changes sampled_likes variable then setState for randomSong to tempSong obj
    var tempSong = this.state.randomSong;
    tempSong.sampled_likes += 1;
    // console.log(tempSong.song_likes);
    this.setState({randomSong: tempSong});
    axios.put(API_URL + this.state.randomSong.id, this.state.randomSong).then(() => {
      console.log(this.state.randomSong.sampled_likes);
    });
  }

  goToTimeStamp = () =>{
    console.log(this.state.randomSong.song_title);
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
                  <a onClick={() => this.handleLikeClickSong()} href="#">&hearts;</a> { this.state.randomSong.song_likes }
                </div>
              </div>
            </div>
            <h2>{ this.state.randomSong.song_title }</h2>
            <h4>{ this.state.randomSong.song_artist }</h4>
            <div className="time-stamp-container">
              <div className="time-stamp">
                <a onClick={this.goToTimeStamp()} href="#">{ this.state.randomSong.song_time_stamp }</a>
              </div>
            </div>
            <div className="song-video">
              <YouTube className="youtube-iframe" videoId={this.state.randomSong.song_videoId} opts={{width: '560', height: '315'}} />
            </div>
          </div>
          <div className="right-side">
            <div className="title-likes-container">
              <h3>Sampled</h3>
              <div className="likes-container">
                <div className="likes-number">
                  <a onClick={() => this.handleLikeClickSampled()} href="#">&hearts;</a> { this.state.randomSong.sampled_likes }
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
              <YouTube className="youtube-iframe" videoId={this.state.randomSong.sampled_videoId} opts={{width: '560', height: '315'}} />

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
