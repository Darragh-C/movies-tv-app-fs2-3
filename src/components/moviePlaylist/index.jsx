import React from 'react';
import { Card, Typography } from '@mui/material';
import CardItem from '../cardItem';
import RemoveFromPlaylist from '../cardIcons/removeFromPlaylist';
import RemovePlaylistIcon from '../cardIcons/removePlaylistIcon';

const styles = {
  frameContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
    overflowX: 'auto',
    paddingTop: 30,
    paddingLeft: 40,
  },
  playlistContainer: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    padding: "30px",
    minWidth: "80%",
  },
  cardContainer: {
    display: 'flex',
    overflowX: 'auto',
  },
  card: {
    flex: '0 0 auto',
    minWidth: 200,
    margin: '0 8px',
  },
  typeography: {
    display:"flex",
    justifyContent:"center",
  },
  titleDiv: {
    paddingBottom: "20px"
  },
};

const MoviePlaylist = ({ title, playlistMovies }) => {
  return (
    <div style={styles.frameContainer}>
      <div style={styles.playlistContainer}>
        <div style={styles.titleDiv}>
          <Typography sx={styles.typeography} variant="h3" component="p">
            {title}
          </Typography>
        </div>
        {playlistMovies && 
          <div style={{ overflowX: 'auto' }}>
            <div style={styles.cardContainer}>
              {playlistMovies.map((m) => (
                <Card key={m.id} sx={styles.card}>
                  <CardItem key={m.id} item={m} action={(m) => {
                    return (
                      <RemoveFromPlaylist playlist={title} movie={m.id}/>
                    )
                  }}/>
                </Card>
              ))}
            </div>
          </div>
        }
        <RemovePlaylistIcon playlistName={title}/>
      </div>
    </div>
  );
};

export default MoviePlaylist;
