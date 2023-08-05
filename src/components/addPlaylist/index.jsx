import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material";
import SubmitText from "../forms/submitText";

const styles = {
  frameContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "140vh", 
  },
  playlistContainer: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    padding: "30px",
    minWidth: "20%",
  },
};

const AddPlaylist = () => {

  const [formOpen, setFormOpen] = useState(false);

  const handleClick = () => {
    setFormOpen(true);
  }

  const handleSubmit = (formData) => {
    console.log("playlist submitted:", formData);
  }

  return(
    <div style={styles.frameContainer}>
      {formOpen ? (
        <div style={styles.playlistContainer}>
          <SubmitText label={"Add Playlist"} buttonText={"Add Playlist"} onAction={handleSubmit}/>
        </div>
      ) : (
        <Button variant="contained" aria-label="add playlist" onClick={handleClick}>Add Playlist</Button>
      )} 
    </div>
  );
};

export default AddPlaylist;