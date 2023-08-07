import React from "react";
import DragCardList from "../components/dragCardList";
import { MemoryRouter } from "react-router";

export default {
  title: "DragCardList",
  component: DragCardList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <DragCardList />
  );
};
Basic.storyName = "Default";
