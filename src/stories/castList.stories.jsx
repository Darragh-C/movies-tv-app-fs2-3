import React from "react";
import CastList from "../components/castList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import testCast from "../dataStore/test-cast.json";
import AddToCastFavouritesIcon from "../components/cardIcons/addToCastFavourites";

export default {
  title: "CastList",
  component: CastList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastList
      cast={testCast.cast}
      action={(cast) => <AddToCastFavouritesIcon cast={cast} />}
    />
  );
};

Basic.storyName = "Default";

