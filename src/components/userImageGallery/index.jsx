import React from 'react';
import { Card, Typography } from '@mui/material';
import CardItem from '../cardItem';
import RemoveFromPlaylist from '../cardIcons/removeFromPlaylist';
import RemovePlaylistIcon from '../cardIcons/removePlaylistIcon';

const styles = {
  frameContainer: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    minWidth: "80%",
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
    justifyContent:"left",
  },
  titleDiv: {
    paddingBottom: "20px"
  },
};

const ImageGallery = ({ movieId, movieImages }) => {
  return (
    <div style={styles.frameContainer}>
      <div style={styles.playlistContainer}>
        <div style={styles.titleDiv}>
          <Typography sx={styles.typeography} variant="h3" component="p">
            User image gallery
          </Typography>
        </div>
        {movieImages && 
          <div style={{ overflowX: 'auto' }}>
            <div style={styles.cardContainer}>
              {movieImages.map((m) => (
                <Card key={m.id} sx={styles.card}>
                  <CardItem key={m.id} item={m} action={(m) => {
                    return (
                      <RemoveFromPlaylist playlist={movieId} movie={m.id}/>
                    )
                  }}/>
                </Card>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ImageGallery;
