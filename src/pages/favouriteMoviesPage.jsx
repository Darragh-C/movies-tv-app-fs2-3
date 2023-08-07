import React, { useContext, useState, useEffect } from "react";
import CardListPage from "../components/cardListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import OptionsDropdown from "../components/forms/optionsDropdown";
import FavRank from "../components/forms/favRank";

const FavouriteMoviesPage = (props) => {
  const context = useContext(MoviesContext);
  const movieIds = context.favourites;
  const [movies, setMovies] = useState([...movieIds]);
  const [favMovies, setFavMovies] = useState([]);
  const [updateStop, setUpdateStop] = useState(true);

  // useEffect(() => {

  //   setFavMovies(context.favourites);
  // }, [context.favourites]);

  // useEffect(() => {
  //   setMovies(...movieIds);
  // }, [movieIds])


  console.log("context.favourites", context.favourites);
  console.log("movies", movies);
  console.log("favMovies", favMovies);
  const rank = [1,2,3,4,5];

  const updateRank = (movie, rank) => {
    //update context
    context.updateFavouriteRank(movie, rank);
    //update state
    const rankedMovie = favMovies.filter((m) => m.id === movie);
    const updatedArray = favMovies.filter((m) => m.id !== movie);
    updatedArray.splice(rank, 0, ...rankedMovie);
    setFavMovies(updatedArray);
    // console.log("newRank", rank);
    // console.log("updateRank context.favourites", context.favourites);
    // console.log("updateRank movies", movies);
  }

  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movies.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const queryMovies = favouriteMovieQueries.map((q) => q.data);

  if (updateStop) {
    setFavMovies(queryMovies);
    setUpdateStop(false);
  }
  

  //console.log("favMovies", favMovies);

  return (
    <CardListPage
      title="Favourite Movies"
      movies={favMovies}
      action={(favMovie) => {
        return (
          <>
            <FavRank movie={favMovie} items={rank} onAction={updateRank}/>
            <RemoveFromFavourites item={favMovie} type={"movie"} />
            <WriteReview movie={favMovie} />
          </>
        );
      }}
    />
  );
};

export default FavouriteMoviesPage;
