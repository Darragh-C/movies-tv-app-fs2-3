import React from "react";
import MoviePlaylist from "../components/moviePlaylist";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import testMovies from "../dataStore/testMovies.json";
import SampleMovie from "./sampleData";


export default {
  title: "Movies playlist",
  component: MoviePlaylist,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const testMovies = [
    { ...SampleMovie, id: 1 },
    { ...SampleMovie, id: 2 },
    { ...SampleMovie, id: 3 },
  ];
  return (
    <MoviePlaylist title="playlist" playlistMovies={testMovies} />
  );
};
Basic.storyName = "Default";
