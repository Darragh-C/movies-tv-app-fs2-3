import React, { useContext, useState } from "react";
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
  const { favourites: movieIds } = useContext(MoviesContext);
  const [movies, setMovies] = useState([]);

  const context = useContext(MoviesContext);
  console.log("context.favourites", context.favourites);
  const rank = [1,2,3,4,5];

  const updateRank = (movie, rank) => {
    context.updateFavouriteRank(movie, rank);
  }



  // Create an array of queries and run them in parallel.
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
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

  const queriedMovies = favouriteMovieQueries.map((q) => q.data);
  setMovies(queriedMovies);

  console.log("movies", movies);

  const updateQueriedMoviesRank = ( movie, rank) => {
    const rankedMovie = movies.filter((m) => m.id === movie);
    const updatedArray = movies.filter((m) => m.id !== movie);
    updatedArray.splice(rank, 0, rankedMovie);
    setMovies(updatedArray);
  }

  return (
    <CardListPage
      title="Favourite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <FavRank movie={movie} items={rank} onAction={updateRank}/>
            <RemoveFromFavourites item={movie} type={"movie"} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavouriteMoviesPage;
