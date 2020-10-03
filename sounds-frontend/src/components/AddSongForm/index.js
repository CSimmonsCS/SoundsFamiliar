import React, { useState } from "react";
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddSongModal from '../AddSongModal';
import Modal from '@material-ui/core/Modal';

import axios from "axios";

import { API_URL } from "../constants";

class AddSongForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'song_title':"",
      'song_artist':"",
      'song_address':"",
      'song_time_stamp':"",
      'song_views': 0,
      'song_likes': 0,

      'sampled_title':"",
      'sampled_artist':"",
      'sampled_address':"",
      'sampled_time_stamp':"",
      'sampled_views':0,
      'sampled_likes':0,
      addOpen: false,
      editOpen: false,
    }
  }

  handleAddOpen = () => {
    this.setState({ addOpen: true });
  };

  handleAddClose = () => {
    this.setState({ addOpen: false });
    this.resetState();
  };

  handleEditOpen = () => {
    this.setState({ editOpen: true });
  };

  handleEditClose = () => {
    this.setState({ editOpen: false });
    this.resetState();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  resetState = () => {
    this.setState({
        'song_title':"",
        'song_artist':"",
        'song_address':"",
        'song_time_stamp':"",
        'song_views': 0,
        'song_likes': 0,

        'sampled_title':"",
        'sampled_artist':"",
        'sampled_address':"",
        'sampled_time_stamp':"",
        'sampled_views':0,
        'sampled_likes':0,
      })
  }

  createSong = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      console.log('Song has been added');
      this.resetState();
    })
  };

  editSong = e => {
    e.preventDefault();
    axios.put(API_URL + 1, this.state).then(() => {
      console.log('Song has been edited');
      this.resetState();
    })
  };

  deleteSong = e => {
    axios.delete(API_URL + this.state.song_title).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render () {

    return (
      <div className="AddSongForm">
          <button type="button" onClick={this.handleAddOpen}>
            Add Song
          </button>
          <button type="button" onClick={this.handleEditOpen}>
            Edit Song
          </button>

          <Modal
             open={this.state.addOpen}
             onClose={this.handleAddClose}
             aria-labelledby="simple-modal-title"
             aria-describedby="simple-modal-description"
           >
             <div className="AddSongModal">
               <h2>Add</h2>
               <form onSubmit={this.createSong}>
                 <h2>Song Info</h2>
                 <div className="song-form-text">
                   <TextField name="song_title" value={this.defaultIfEmpty(this.state.song_title)} onChange={this.onChange} required id="song_title" label="Song Title" />
                   <TextField name="song_artist" value={this.defaultIfEmpty(this.state.song_artist)} onChange={this.onChange} required id="song-artist" label="Song Artist" />
                   <TextField name="song_time_stamp" value={this.defaultIfEmpty(this.state.song_time_stamp)} onChange={this.onChange} required id="song-time" label="Song Time-Stamp" />
                   <TextField name="song_address" value={this.defaultIfEmpty(this.state.song_address)} onChange={this.onChange} required id="song-address" label="Song Address" />
                 </div>
                 <h2>Sampled Song Info</h2>
                 <div className="sampled-form-text">
                   <TextField name="sampled_title" value={this.defaultIfEmpty(this.state.sampled_title)} onChange={this.onChange}required id="sampled-title" label="Original Title" />
                   <TextField name="sampled_artist" value={this.defaultIfEmpty(this.state.sampled_artist)} onChange={this.onChange}required id="sampled-artist" label="Original Artist" />
                   <TextField name="sampled_time_stamp" value={this.defaultIfEmpty(this.state.sampled_time_stamp)} onChange={this.onChange}required id="sampled-time" label="Original Time-Stamp" />
                   <TextField name="sampled_address" value={this.defaultIfEmpty(this.state.sampled_address)} onChange={this.onChange}required id="sampled-address" label="Original Address" />
                 </div>
                 <div className="add-song-button">
                   <Button type="submit" variant="contained">Submit</Button>
                 </div>
               </form>
             </div>
           </Modal>

           <Modal
              open={this.state.editOpen}
              onClose={this.handleEditClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className="AddSongModal">
                <h2>Edit</h2>
                <form onSubmit={this.editSong}>
                  <h2>Sampled Song Info</h2>
                  <div className="song-form-text">
                    <TextField name="song_title" value={this.defaultIfEmpty(this.state.song_title)} onChange={this.onChange} required id="song_title" label="Song Title" />
                    <TextField name="song_artist" value={this.defaultIfEmpty(this.state.song_artist)} onChange={this.onChange} required id="song-artist" label="Song Artist" />
                    <TextField name="song_time_stamp" value={this.defaultIfEmpty(this.state.song_time_stamp)} onChange={this.onChange} required id="song-time" label="Song Time-Stamp" />
                    <TextField name="song_address" value={this.defaultIfEmpty(this.state.song_address)} onChange={this.onChange} required id="song-address" label="Song Address" />
                  </div>
                  <h2>Original Song Info</h2>
                  <div className="sampled-form-text">
                    <TextField name="sampled_title" value={this.defaultIfEmpty(this.state.sampled_title)} onChange={this.onChange}required id="sampled-title" label="Original Title" />
                    <TextField name="sampled_artist" value={this.defaultIfEmpty(this.state.sampled_artist)} onChange={this.onChange}required id="sampled-artist" label="Original Artist" />
                    <TextField name="sampled_time_stamp" value={this.defaultIfEmpty(this.state.sampled_time_stamp)} onChange={this.onChange}required id="sampled-time" label="Original Time-Stamp" />
                    <TextField name="sampled_address" value={this.defaultIfEmpty(this.state.sampled_address)} onChange={this.onChange}required id="sampled-address" label="Original Address" />
                  </div>
                  <div className="add-song-button">
                    <Button type="submit" variant="contained">Submit</Button>
                  </div>
                </form>
              </div>
            </Modal>

      </div>
    );
  }
}

export default AddSongForm;
