import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import DragAndDropPage from "../pages/dragAndDrop";


export default {
  title: "DragAndDropPage",
  component: DragAndDropPage,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <DragAndDropPage />
  );
};
Basic.storyName = "Default";
