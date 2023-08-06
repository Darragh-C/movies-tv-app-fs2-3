import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


export default {
  title: "AddToPlaylistIcon",
  component: AddToPlaylistIcon,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <AddToPlaylistIcon />
  );
};
Basic.storyName = "Default";
