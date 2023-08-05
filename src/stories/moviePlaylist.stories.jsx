import React from "react";
import MoviePlaylist from "../components/moviePlaylist";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import testMovies from "../dataStore/testMovies.json";
import SampleMovie from "./sampleData";
import Playlists from "../dataStore/movie-playlists.json";

export default {
  title: "Movies playlist",
  component: MoviePlaylist,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const testMovies = Playlists[0].movies;
  return (
    <MoviePlaylist title="My playlist" playlistMovies={testMovies} />
  );
};
Basic.storyName = "Default";
