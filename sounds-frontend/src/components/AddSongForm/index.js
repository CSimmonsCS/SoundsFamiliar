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
      'sample_title':"",
      'sample_artist':"",
      'sample_address':"",
      'sample_time_stamp':"",
      'sample_views': 0,
      'sample_likes': 0,

      'og_title':"",
      'og_artist':"",
      'og_address':"",
      'og_time_stamp':"",
      'og_views':0,
      'og_likes':0,
      editOpen: false,
      addOpen: false,
    }
  }

  // componentDidMount() {
  //   if(this.props.student){
  //     const { sample_title, sample_name, sample_address, sample_time_stamp, og_title, og_name, og_address, og_time_stamp
  //     } = this.props.student;
  //     this.setState({ sample_title, sample_name, sample_address, sample_time_stamp, og_title, og_name, og_address, og_time_stamp });
  //   }
  // }

  handleAddOpen = () => {
    this.setState({ addOpen: true });
  };

  handleAddClose = () => {
    this.setState({ addOpen: false });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      console.log('Song has been added');
      this.setState({
          'sample_title':"",
          'sample_artist':"",
          'sample_address':"",
          'sample_time_stamp':"",
          'sample_views': 0,
          'sample_likes': 0,

          'og_title':"",
          'og_artist':"",
          'og_address':"",
          'og_time_stamp':"",
          'og_views':0,
          'og_likes':0,
        }
      )
    })
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
               <form onSubmit={this.createStudent}>
                 <h2>Sample Song Info</h2>
                 <div className="sample-form-text">
                   <TextField name="sample_title" value={this.defaultIfEmpty(this.state.sample_title)} onChange={this.onChange} required id="sample_title" label="Sample Title" />
                   <TextField name="sample_artist" value={this.defaultIfEmpty(this.state.sample_artist)} onChange={this.onChange} required id="sample-artist" label="Sample Artist" />
                   <TextField name="sample_time_stamp" value={this.defaultIfEmpty(this.state.sample_time_stamp)} onChange={this.onChange} required id="sample-time" label="Sample Time-Stamp" />
                   <TextField name="sample_address" value={this.defaultIfEmpty(this.state.sample_address)} onChange={this.onChange} required id="sample-address" label="Sample Address" />
                 </div>
                 <h2>Original Song Info</h2>
                 <div className="og-form-text">
                   <TextField name="og_title" value={this.defaultIfEmpty(this.state.og_title)} onChange={this.onChange}required id="og-title" label="Original Title" />
                   <TextField name="og_artist" value={this.defaultIfEmpty(this.state.og_artist)} onChange={this.onChange}required id="og-artist" label="Original Artist" />
                   <TextField name="og_time_stamp" value={this.defaultIfEmpty(this.state.og_time_stamp)} onChange={this.onChange}required id="og-time" label="Original Time-Stamp" />
                   <TextField name="og_address" value={this.defaultIfEmpty(this.state.og_address)} onChange={this.onChange}required id="og-address" label="Original Address" />
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
