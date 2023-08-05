import React, { useContext } from "react";
import CardListPage from "../components/cardListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";

// import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
// import WriteReview from "../components/cardIcons/writeReview";


const FavouriteTvPage = (props) => {
  const { tvFavourites: showIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const favouriteTvQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favouriteTvQueries.map((q) => q.data);

  return (
    <CardListPage
      title="Favourite TV"
      movies={shows}
      action={(show) => {
        return <RemoveFromFavourites item={show} type={"tv"} />
      }}
    />
  );
};

export default FavouriteTvPage;
