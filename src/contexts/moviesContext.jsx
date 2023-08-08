import React, { useState, useEffect } from "react";
import testPlaylists from "../dataStore/movie-playlists.json";
import testMovies from "../dataStore/testMovies.json";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [favRemoval, setFavRemoval] = useState("");
  const [myReviews, setMyReviews] = useState( {} ); 
  const [mustWatch, setMustWatch] = useState([]);
  const [linkBasePath, setLinkBasePath] = useState("");
  const [tvFavourites, setTvFavourites] = useState([]);
  const [castFavourites, setCastFavourites] = useState([]);
  const [crewFavourites, setCrewFavourites] = useState([]);
  const [currentFetchContext, setCurrentFetchContext] = useState("Discover");
  const [playlists, setPlaylists] = useState([  ]);

  const updateFavouriteRank = (movie, rank) => {
    const updatedArray = favourites.filter((m) => m !== movie);
    updatedArray.splice(rank, 0, movie);
    setFavourites(updatedArray);
  }

  const removePlaylist = (playlistName) => {
    const existingPlaylist = playlists.find((p) => p.playlist === playlistName);
    if (existingPlaylist) {
      const updatedPlaylists = playlists.filter((p) => p.playlist !== playlistName);
      setPlaylists((prevPlaylists) => (updatedPlaylists));
    }
  }

  const addPlaylist = (playlistName) => {
    console.log("playlistName at context function",playlistName);
    let updatedPlaylists = [...playlists];
    const newPlaylist = {
      playlist: playlistName,
      movies: [],
    };
    updatedPlaylists.push(newPlaylist)
    setPlaylists(updatedPlaylists);
  };

  const addPlaylistMovie = (playlistName, movie) => {
    const playlistIndex = playlists.findIndex((p) => p.playlist === playlistName);
  
    if (playlistIndex !== -1) {
      const updatedPlaylists = [...playlists];
      updatedPlaylists[playlistIndex].movies.push(movie);
      setPlaylists(updatedPlaylists);
    } else {
      console.log("playlist not found");
    }
  };

  const removePlaylistMovie = (playlistName, movie) => {
    const playlist = playlists.find((p) => p.playlist === playlistName);
    if (playlist) {
      const playlistMovies = playlist.movies.filter((m) => m.id !== movie);
      const updatedPlaylist = {
        ...playlist,
        movies: playlistMovies,
      };
      const playlistIndex = playlists.findIndex((p) => p.playlist === playlistName);
      if (playlistIndex !== -1) {
        const updatedPlaylists = [...playlists];
        updatedPlaylists[playlistIndex] = updatedPlaylist;
        setPlaylists(updatedPlaylists);
      }
    }
  };

  const updateFetchContext = (fetchContext) => {
    setCurrentFetchContext(fetchContext);
  }

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const updateFavouritesRank = (updatedFavourites) => {
    setFavourites(updatedFavourites);
  };

  const addToTvFavourites = (show) => {
    let updatedTvFavourites = [...tvFavourites];
    if (!tvFavourites.includes(show.id)) {
      updatedTvFavourites.push(show.id);
    }
    setTvFavourites(updatedTvFavourites);
  };

  const addToCastFavourites = (cast) => {
    console.log("cast fave:", cast)
    let updatedCastFavourites = [...castFavourites];
    if (!castFavourites.includes(cast.id)) {
      updatedCastFavourites.push(cast.id);
    }
    setCastFavourites(updatedCastFavourites);
  };

  const addToCrewFavourites = (crew) => {
    console.log("crew fave:", crew)
    let updatedCrewFavourites = [...crewFavourites];
    if (!crewFavourites.includes(crew.id)) {
      updatedCrewFavourites.push(crew.id);
    }
    setCrewFavourites(updatedCrewFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (item, type) => {
    if (type === "movie") {
      setFavourites(favourites.filter((mId) => mId !== item.id));
      setFavRemoval(item);
    } else if (type === "tv") {
      setTvFavourites(tvFavourites.filter((tvId) => tvId !== item.id));
    } else if (type === "cast") {
      setCastFavourites(castFavourites.filter((castId) => castId !== item.id));
    } else if (type === "crew") {
      setCastFavourites(crewFavourites.filter((crewId) => crewId !== item.id));
    }  
  };

  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToMustWatch = (movie) => {
    let updatedMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      updatedMustWatch.push(movie.id);
    }
    setMustWatch(updatedMustWatch);
    console.log(`Must Watch: ${updatedMustWatch}`);
  };  

  const setBasePath = (basePath) => {
    setLinkBasePath(basePath);
  };
  

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        updateFavouritesRank,
        removeFromFavourites,
        updateFavouriteRank,
        addToMustWatch,
        linkBasePath,
        setBasePath,
        addReview,
        tvFavourites,
        addToTvFavourites,
        castFavourites, 
        addToCastFavourites,
        currentFetchContext,
        updateFetchContext,
        addPlaylist,
        addPlaylistMovie,
        removePlaylist,
        removePlaylistMovie,
        playlists,
        favRemoval,
        addToCrewFavourites,
        crewFavourites
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
