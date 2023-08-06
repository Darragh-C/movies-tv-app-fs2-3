import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import SubmitText from "../forms/submitText";
import MoviesContext from "../../contexts/moviesContext";

const styles = {
  frameContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
  },
  playlistContainer: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    padding: 30,
 
    minWidth: "20%",
  },
  buttonContainer: {
    paddingTop: 30,
  },
};

const AddPlaylist = ({action}) => {

  const [formOpen, setFormOpen] = useState(false);

  const handleClick = () => {
    setFormOpen(true);
  }

  const handleSubmit = (formData) => {
    console.log("playlist submitted:", formData);
    try {
      action(formData.value);
    } catch (error) {
      console.error('Error:', error);
    }
    setFormOpen(false);
  }

  return(
    <div style={styles.frameContainer}>
      {formOpen ? (
        <div style={styles.playlistContainer}>
          <SubmitText label={"Add Playlist"} buttonText={"Add Playlist"} onAction={handleSubmit}/>
        </div>
      ) : (
        <div style={styles.buttonContainer}>
          <Button variant="contained" aria-label="add playlist" onClick={handleClick}>Add Playlist</Button>
        </div>  
      )} 
    </div>
  );
};

export default AddPlaylist;