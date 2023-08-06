import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";
import testPlaylists from "../../dataStore/movie-playlists.json"



function PlaylistDialog({ onClose, open, playlists }) {

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add to playlist</DialogTitle>
      <List sx={{ pt: 0 }}>
        {playlists.map((p) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(p)} key={p}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={p} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

PlaylistDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddToPlaylistIcon({movie}) {
  const context = useContext(MoviesContext);
  const playlists = context.playlists.map((p) => p.playlist);
  //const playlists = testPlaylists.map((p) => p.playlist);
  //const playlists = ['Sunday movies', '90s thrillers', 'Murder mysteries'];
  console.log("playlists at icon", playlists)
  const [open, setOpen] = React.useState(false);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (playlist) => {
    context.addPlaylistMovie(playlist, movie);
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="add to favorites" onClick={handleClickOpen}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
      <PlaylistDialog
        open={open}
        onClose={handleClose}
        playlists={playlists}
      />
    </div>
  );
}