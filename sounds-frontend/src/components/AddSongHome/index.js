import React, { Component } from "react";
import AddSongForm from "../AddSongForm";

import axios from "axios";

import { API_URL } from "../constants";

class AddSongHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  };

  componentDidMount(){
    this.resetState();
  }

  getSongs = () => {
    axios.get(API_URL).then(res => this.setState({ songs: res.data }));
  };

  resetState = () => {
    this.getSongs();
  }

  render(){

    return(
      <div>{this.state.songs}
        <AddSongForm />
      </div>
    );
  }
}

export default AddSongHome;
