import React, { useContext, useState }  from "react";
import AddPlaylist from "../components/addPlaylist";
import MoviePlaylist from "../components/moviePlaylist";
import { MoviesContext } from "../contexts/moviesContext";
import { Grid } from "@mui/material"; 
import MediaHeader from "../components/mediaHeader";
import CardListHeaderInsert from "../components/headerInserts/cardListHeaderInsert";

const styles = {
  root: {
    padding: "20px",
  },
};

const MoviePlaylistsPage = () => {

  const context = useContext(MoviesContext);
  const playlists = context.playlists;

  const handleAddPlaylist = (playlistName) => {
    console.log("handling", playlistName);
    context.addPlaylist(playlistName)
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <MediaHeader>
            <CardListHeaderInsert title={"Movie Playlists"}/>
          </MediaHeader>
        </Grid>
        <Grid item container spacing={5}>
            <AddPlaylist action={handleAddPlaylist}/>
            {playlists && playlists.map((p) => {
              return (
                <MoviePlaylist key={p.playlist} title={p.playlist} playlistMovies={p.movies}/>
              );
              
            })}
        </Grid>
      </Grid>
    </>
  );
};

export default MoviePlaylistsPage;
