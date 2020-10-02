import React from 'react';
import ReactDOM from 'react-dom';
import AddSongModal from '../AddSongModal';
import AddSongForm from '../AddSongForm';

class Description extends React.Component {
  render () {
    return (
      <div className='Description'>
        <div className="title-container">
          <div className="description">
            <h1>Discover Music through Samples, Cover Songs and Remixes</h1>
            <p>
              Dig deeper into music by discovering direct connections among over 702,000 songs and 229,000 artists, from Hip-Hop, Rap and R&B via Electronic / Dance through to Rock, Pop, Soul, Funk, Reggae, Jazz, Classical and beyond.
              WhoSampled's content is built by a community of over 24,000 contributors. Make contributions to earn Cred  - our very own points system. Join us now to add more knowledge and share it with the world!
            </p>
            <AddSongForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
