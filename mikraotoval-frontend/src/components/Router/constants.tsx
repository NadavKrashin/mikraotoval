import MainView from "../../views/MainView/MainView";

import { Page } from "./types";

export const PAGES: Record<string, Page> = {
  mainView: {
    path: "/",
    element: () => <MainView />,
  },
};
