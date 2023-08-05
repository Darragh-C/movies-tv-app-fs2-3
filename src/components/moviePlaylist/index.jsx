import React, { useState, useContext } from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardList from '../cardList';

import AddToFavouritesIcon from '../cardIcons/addToFavourites';

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "140vh", 
  },
  form: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    padding: "30px",
    minWidth: "80%",
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
  },
  input: {
    width: "100%",
    color: "gray",
  },
  label: {
    padding: 10,
    margin: "0 auto", 
  },
  button: {
    marginTop: "20px",
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: "18pt",
    textAligh: "center"
  },
  typeography: {
    display:"flex",
    justifyContent:"center",
  },
  list : {
    marginLeft: "100",
  }
}

function MoviePlaylist({ title, playlistMovies }) {

  return (
    <div style={styles.formContainer}>
      <div style={styles.form}>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={styles.typeography} variant="h3" component="p">
              {title}
            </Typography>
            <p key={"-text"} style={styles.text}></p>
          </Grid>
          <Grid  item container spacing={5}>
    
            <CardList items={playlistMovies} action={(movie) => <AddToFavouritesIcon movie={movie} />}/>
          
          
          </Grid>
        </Grid>
      
          
       
            
      </div>
    </div>
  );
}

export default MoviePlaylist;
