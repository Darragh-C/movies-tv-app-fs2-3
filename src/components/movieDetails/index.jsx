import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from '../movieReviews'
import CastList from "../castList";
import MovieMetadata from "../movieDetailsComponents/movieMetadata";
import MovieBio from "../movieDetailsComponents/movieBio";
import GenreTags from "../movieDetailsComponents/genreTags";
import ProductionCompaniesRow from "../cardRows/productionCompaniesRow";

const styles = {
  fab: { 
    position: "fixed",
    top: 70,
    right: 2,
  },
  drawer: {
    anchor: "top",
    height: "50%",
  },
};

const MovieDetails = ( { movie, cast, action }) => {
  const { id } = useParams();

  const genreNames = movie.genres.map((genre) => genre.name);

  const [drawerOpen, setDrawerOpen] = useState(false); 
  return (
    <>
      <MovieBio movie={movie} />
      <GenreTags genres={genreNames} />
      <MovieMetadata movie={movie} />
      <ProductionCompaniesRow companies={movie.production_companies}/>
      { cast &&
        <CastList cast={cast} onAction={action}/>
      }
      

      <Fab    
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer sx={styles.drawer} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default  MovieDetails ;
