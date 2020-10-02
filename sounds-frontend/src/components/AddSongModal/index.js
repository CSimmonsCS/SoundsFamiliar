import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop'

// UNNEEDED
const AddSongModal = (props) => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = (
    <div className="AddSongForm">
      <form>
        <h2>Sample Song Info</h2>
        <div className="sample-form-text">
          <TextField required id="sample-title" label="Sample Title" />
          <TextField required id="sample-artist" label="Sample Artist" />
          <TextField required id="sample-song" label="Sample Song" />
          <TextField required id="sample-time" label="Sample Time-Stamp" />
          <TextField required id="sample-address" label="Sample Address" />
        </div>
        <h2>Original Song Info</h2>
        <div className="og-form-text">
          <TextField required id="og-title" label="Original Title" />
          <TextField required id="og-artist" label="Original Artist" />
          <TextField required id="og-song" label="Original Song" />
          <TextField required id="og-time" label="Original Time-Stamp" />
          <TextField required id="og-address" label="Original Address" />
        </div>
        <div className="add-song-button">
          <Button type="submit" variant="contained">Submit</Button>
        </div>
      </form>
    </div>

  );

  return(
    <div className="AddSongModal">
      <button type="button" onClick={handleOpen}>
        Add/Edit Song
      </button>

      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
           timeout: 500,
         }}
       >
         {body}
       </Modal>

    </div>
  );
}

export default AddSongModal;
