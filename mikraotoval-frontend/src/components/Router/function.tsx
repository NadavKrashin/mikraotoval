import { Route } from "react-router-dom";
import { Page } from "./types";

export const createRoute = ({ path, element }: Page): JSX.Element => (
  <Route key={path} path={path} element={element()} />
);
