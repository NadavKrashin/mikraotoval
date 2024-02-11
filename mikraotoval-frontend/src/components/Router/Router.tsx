import { Routes } from "react-router-dom";
import { PAGES } from "./constants";
import { createRoute } from "./function";
import { map } from "lodash";

const routes = map(PAGES, createRoute);

const Router = () => {
  return <Routes>{routes}</Routes>;
};

export default Router;
