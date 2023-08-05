import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddPlaylist from "../components/addPlaylist";


export default {
  title: "AddPlaylist",
  component: AddPlaylist,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <AddPlaylist />
  );
};
Basic.storyName = "Default";
