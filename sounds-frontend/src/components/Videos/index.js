import React from 'react';
import ReactDOM from 'react-dom';

class Videos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data
    };
  }


  render () {
    return (
      <div className='Videos'>
        <div className="song-container">
          <div className="left-side">
            <div className="title-likes-container">
              <h3>Song</h3>
              <div className="likes-container">
                <div className="likes-number">
                  <a href="#">&hearts;</a> { this.props.data.sample.likes }
                </div>
              </div>
            </div>
            <h2>{ this.props.data.sample.title }</h2>
            <h4>{ this.props.data.sample.artist }</h4>
            <div className="time-stamp-container">
              <div className="time-stamp">
                <a href="#">{ this.props.data.sample.time_stamp }</a>
              </div>
            </div>
            <div className="song-video">
              <iframe title="song" width="560" height="315"
                src="https://www.youtube.com/embed/6L_k74BOLag?start=63"
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
                  <a href="#">&hearts;</a> { this.props.data.original.likes }
                </div>
              </div>
            </div>
            <h2>{ this.props.data.original.title }</h2>
            <h4>{ this.props.data.original.artist }</h4>
            <div className="time-stamp-container">
              <div className="time-stamp">
                <a href="#">{ this.props.data.original.time_stamp }</a>
              </div>
            </div>
            <div className="sampled-video">
              <iframe title='sampled'width="560" height="315"
                      src="https://www.youtube.com/embed/qhrPmQTyIvM?start=202"
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
