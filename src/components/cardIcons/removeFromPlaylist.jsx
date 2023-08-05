import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromPlaylist = ({ playlist, movie }) => {
  const context = useContext(MoviesContext);

  const onClick = (e) => {
    e.preventDefault();
    context.removePlaylistMovie(playlist, movie);
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

export default RemoveFromPlaylist;
