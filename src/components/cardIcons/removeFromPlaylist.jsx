import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromPlaylist = ({ playlist, movie }) => {
  const context = useContext(MoviesContext);

  const onClick = (e) => {
    e.preventDefault();
    console.log("removePlaylistMovie", movie);
    context.removePlaylistMovie(playlist, movie);
  };

return (
  <IconButton
    aria-label="remove from playlist"
    onClick={onClick}
  >
    <PlaylistRemoveIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromPlaylist;
