import React, { useState } from "react";
import TemplateMediaDetailsPage from "../components/templateMediaDetailsPage";
import MediaHeader from "../components/MediaHeader";
import FantasyMoviePoster from "../components/imageLists/fantasyMoviePoster";
import FantasyMovieDetailsTest from "../components/fantasyMovieDetailsTest";
import FastasyMediaHeaderInsert from "../components/headerInserts/fantasyMovieHeaderInsert";

const FantasyMoviePage = () => {

  const [movie, setMovie] = useState({
    title: "",
    overview: "",
    release_date: "",
    runtime: 0,
    genres: [],
    cast: [],
    production_companies: [],
  });

  const handleUpdate = (data) => {
    console.log("data", data)
    console.log("movie", movie)
    const {type, value} = data;

    if (type === "Add title") {
      handleTitleUpdate(value)
    } else if (type === "Add overview") {
      handleOverviewUpdate(value)
    } else if (type === "genre") {
      handleGenreUpdate(value)
    } else if (type === "cast") {
      console.log("handleCastUpdate", value)
      handleCastUpdate(value)
    } else if (type === "production") {
      console.log("handleProdUpdate", value)
      handleProdUpdate(value)
    } else if (type === "Add release date") {
      console.log("handleReleaseUpdate", value)
      handleReleaseUpdate(value)
    } else if (type === "Add run time") {
      console.log("handleRuntimeUpdate", value)
      handleRuntimeUpdate(value)
    }
  };

  const handleTitleUpdate = (val) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      title: val,
    }));
  };

  const handleOverviewUpdate = (val) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      overview: val,
    }));
  };

  const handleReleaseUpdate = (val) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      release_date: val,
    }));
  };

  const handleRuntimeUpdate = (val) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      runtime: val,
    }));
  };

  const handleGenreUpdate = (val) => {
    console.log(`handleGenreUpdate: ${val}`)
    setMovie((prevMovie) => ({
      ...prevMovie,
      genres: [...prevMovie.genres, val]
    }));
  };

  const handleCastUpdate = (val) => {
    console.log(`handleCastUpdate: ${val}`)
    setMovie((prevMovie) => ({
      ...prevMovie,
      cast: [...prevMovie.cast, val]
    }));
    console.log(`genre val: ${val}`)
  };

  const handleProdUpdate = (val) => {
    console.log(`handleProdUpdate: ${val}`)
    setMovie((prevMovie) => ({
      ...prevMovie,
      production_companies: [...prevMovie.production_companies, val]
    }));
    console.log(`genre val: ${val}`)
  };

  return (
    <>
      <TemplateMediaDetailsPage>
        <MediaHeader>
          <FastasyMediaHeaderInsert title={movie.title}/>
        </MediaHeader>
        <FantasyMoviePoster />
        <FantasyMovieDetailsTest movie={movie} action={handleUpdate}/>
      </TemplateMediaDetailsPage>
    </>
  );
};

export default FantasyMoviePage;
