import React from 'react';
import { Card, Typography } from '@mui/material';
import CardItem from '../cardItem';

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
    padding: "20px"
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
        <div style={{ overflowX: 'auto' }}>
          <div style={styles.cardContainer}>
            {playlistMovies.map((card) => (
              <Card key={card.id} sx={{ ...styles.card, mx: 1 }}>
                <CardItem key={card.id} item={card}/>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePlaylist;
