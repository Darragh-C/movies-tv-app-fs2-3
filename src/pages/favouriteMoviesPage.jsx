import React, { useContext, useState, useEffect } from "react";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import { Box } from "@mui/material"; 
import { GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd"
import CardItem from "../components/cardItem";
import Typography from '@mui/material/Typography';
import MediaHeader from "../components/mediaHeader";
import CardListHeaderInsert from "../components/headerInserts/cardListHeaderInsert";
import {Button} from "@mui/material";

const styles = {
  frame: {
    maxWidth: "100%",
    margin: "20px",
  },
  gridItem: {
    backgroundColor: "white",
    border: "2px solid white",
    boxShadow: "0 4px 8px 0 black",
    width: "100%",
    cursor: "-webkit-grab",
  },
  container: {
    backgroundColor: "white",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
};

const FavouriteMoviesPage = () => {

  //movie context
  const context = useContext(MoviesContext);
  const favourites = context.favourites;
  const favRemoval = context.favRemoval;
  console.log("favourites", favourites);

  //movies and grid items state
  const [movies, setMovies] = useState([...favourites]);
  const [items, setItems] = useState([]);
  console.log("items at initial state", items);

  //fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log("fetching movies")
        const moviesData = await Promise.all(
          movies.map(async (id) => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`);
            const jsonData = await response.json();
            return(jsonData);
            //return jsonData.results;
          })
        );
        console.log("moviesData:", moviesData);
        setItems(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  //update favourites order
  const updateOrder = async () => {
    try {
      console.log("updating order");
      const favMovieIds = items.map((i) => i.id);
      console.log("favMovieIds:", favMovieIds);
      context.updateFavouriteRank(favMovieIds);
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  //remove item
  useEffect(() => {
    const removeItem = async (item) => {
      try {
        console.log("removing item:", item)
        const updatedItems = items.filter((i) =>  i !== item);
        setItems(updatedItems);
      } catch (error) {
        console.error('Error removing item:', error);
      }
    };

    removeItem(favRemoval);
  }, [favRemoval]);

  //index swap function
  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
    console.log(items);
  }

  return (
    <>
    <MediaHeader>
      <CardListHeaderInsert title={"Favourite Movies"}/>
    </MediaHeader>
    {items.length > 0 ? (
      <>
        <div style={styles.buttonContainer}>
          <Button variant="contained" aria-label="add playlist" onClick={updateOrder}>
            <Typography>
              Save Order
            </Typography>
          </Button>      
        </div>
        <Box sx={styles.frame}> 
          <GridContextProvider onChange={onChange}>
            <GridDropZone
              id="items"
              boxesPerRow={3}
              rowHeight={750}
              style={{ height: 750*Math.ceil(items.length / 3)}}
            >
              {items.map((item) => (
                <GridItem key={item.id} sx={styles.gridItem}>
                  <CardItem key={item.id} item={item} action={(movie) => {
                    return (
                      <>
                        <RemoveFromFavourites item={movie} type={"movie"} />
                        <WriteReview movie={movie} />                    
                      </> 
                    );
                  }}
                  />
                </GridItem>
              ))}
            </GridDropZone>
          </GridContextProvider>
        </Box>
      </>
    ) : (
      <div style={styles.buttonContainer}>
        <Typography component="span" variant="body1" color="textPrimary">
          No favorites
        </Typography>        
      </div>
    )}
    </>
  );
};

export default FavouriteMoviesPage;
