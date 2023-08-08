import React, { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getCastMember } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import CastList from "../components/castList";
import CrewList from "../components/crewList";
import Typography from '@mui/material/Typography';
import CardListHeaderInsert from "../components/headerInserts/cardListHeaderInsert";
import MediaHeader from "../components/mediaHeader";

const styles = {
  textContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
};

const FavouriteCastPage = (props) => {
  const { castFavourites: castIds } = useContext(MoviesContext);
  const { crewFavourites: crewIds } = useContext(MoviesContext);
  console.log("castIds", castIds);
  console.log("crewIds", crewIds);

  // Create an array of cast queries and run them in parallel.
  const favouriteCastQueries = useQueries(
    castIds.map((castId) => {
      return {
        queryKey: ["cast", { id: castId }],
        queryFn: getCastMember,
      };
    })
  );
  // Create an array of crew queries and run them in parallel.
  const favouriteCrewQueries = useQueries(
    crewIds.map((castId) => {
      return {
        queryKey: ["crew", { id: castId }],
        queryFn: getCastMember,
      };
    })
  );

  // Check if any of the parallel cast queries is still loading.
  const castIsLoading = favouriteCastQueries.find((c) => c.isLoading === true);
  // Check if any of the parallel crew queries is still loading.
  const crewIsLoading = favouriteCrewQueries.find((c) => c.isLoading === true);

  if (castIsLoading) {
    return <Spinner />;
  }
  if (crewIsLoading) {
    return <Spinner />;
  }

  const cast = favouriteCastQueries.map((q) => q.data);
  const crew = favouriteCrewQueries.map((q) => q.data);

  return (
    <>
      <MediaHeader>
        <CardListHeaderInsert title={"Favourite cast"}/>
      </MediaHeader>
      {castIds.length > 0 ? (
        <CastList
          cast={cast}
          onAction={(cast) => {
            return (
                <RemoveFromFavourites item={cast} type={"cast"} />
            );
          }}
        />   
      ) : (
        <div style={styles.textContainer}>
          <Typography component="span" variant="body1" color="textPrimary">
            No cast favorites
          </Typography>        
        </div>
      )}
      {crewIds.length > 0 ? (
        <CrewList
          cast={crew}
          onAction={(crew) => {
            return (
                <RemoveFromFavourites item={crew} type={"crew"} />
            );
          }}
        />  
      ) : (
        <div style={styles.textContainer}>
          <Typography component="span" variant="body1" color="textPrimary">
            No crew favorites
          </Typography>        
        </div>
      )}
    </>

  );
};

export default FavouriteCastPage;
