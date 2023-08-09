import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromGalleryIcon = ({ movieId, imagePath }) => {
  const context = useContext(MoviesContext);

  const onClick = (e) => {
    e.preventDefault();
    console.log("deleting image", imagePath);
    context.removeGaleryImage(movieId, imagePath);
  };

return (
  <IconButton
    aria-label="remove from playlist"
    onClick={onClick}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromGalleryIcon;
