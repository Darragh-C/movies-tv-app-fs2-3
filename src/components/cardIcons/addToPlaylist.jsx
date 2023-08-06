import * as React from 'react';
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

//const playlists = ['Sunday movies', '90s thrillers', 'Murder mysteries'];

function PlaylistDialog(props) {
  const { onClose, open, playlists } = props;

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
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

export default function AddToPlaylistIcon({movie, playlists}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (playlist) => {
    playlist.preventDefault();
    context.addMovieToPlaylist(playlist, movie);
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
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