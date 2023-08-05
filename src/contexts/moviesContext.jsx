import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} ); 
  const [mustWatch, setMustWatch] = useState([]);
  const [linkBasePath, setLinkBasePath] = useState("");
  const [tvFavourites, setTvFavourites] = useState([]);
  const [castFavourites, setCastFavourites] = useState([]);
  const [currentFetchContext, setCurrentFetchContext] = useState("Discover");
  const [playlists, setPlaylists] = useState([]);

  const removePlaylist = (playlistName) => {
    //check if playlist exists
    const existingPlaylist = playlists.find((p) => p.playlist === playlistName);
    //if it does, remove it
    if (existingPlaylist) {
      const updatedPlaylists = playlists.filter((p) => p.playlist === playlistName);
      setPlaylists((prevPlaylists) => (updatedPlaylists));
    }
  }

  const addPlaylist = (playlistName) => {
    const newPlaylist = {
      playlist: playlistName,
      movies: [],
    };
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
  };

  const addPlaylistMovie = (playlistName, movie) => {
    //find playlist
    const playlist = playlists.find((p) => p.playlist === playlistName);
    if (playlist) {
      const updatedPlaylist = {
        ...existingPlaylist,
        movies: [...existingPlaylist.movies, ...movie],
      };
      setPlaylists((prevPlaylists) => [...prevPlaylists, updatedPlaylist]);
    } else {
      console.log("playlist not found")
    }  
  };

  const removePlaylistMovie = (playlistName, movie) => {
    //check if playlist already exists
    const playlist = playlists.find((p) => p.playlist === playlistName);
    // if it does, 
    if (playlist) {
      const playlistMovies = playlist.movies.filter((m) => m.id === movie.id);
      const updatedPlaylist = {
        ...playlist,
        movies: [playlistMovies],
      };
    }
    setPlaylists((prevPlaylists) => [...prevPlaylists, updatedPlaylist]); 
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

  // We will use this function in a later section
  const removeFromFavourites = (item, type) => {
    if (type === "movie") {
      setFavourites(favourites.filter((mId) => mId !== item.id));
    } else if (type === "tv") {
      setTvFavourites(tvFavourites.filter((tvId) => tvId !== item.id));
    } else if (type === "cast") {
      setCastFavourites(castFavourites.filter((castId) => castId !== item.id));
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
        removeFromFavourites,
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
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
