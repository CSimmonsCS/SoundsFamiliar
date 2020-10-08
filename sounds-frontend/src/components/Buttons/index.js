import React from 'react';
import ReactDOM from 'react-dom';

const Buttons = (props) => {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     commentToggle: false,
  //   }
  // }
  // render () {
    return (
      <div className='Buttons'>
        <div className="under-video">
          <div className="comment-button">
            <button type="button" name="comment" onClick={() => {props.handleCommentToggle()}}>COMMENT</button>
          </div>
          <div className="next-button">
            <button onClick={() => window.location.reload(false)} type="button" name="next">NEXT</button>
          </div>
        </div>
      </div>
    );
  }
// }

export default Buttons;