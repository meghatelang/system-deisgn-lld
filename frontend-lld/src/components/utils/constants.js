import { lazy } from "react";

export const MENU = [
  {
    id: "shimmer-ui",
    title: "Shimmer UI",
    component: lazy(() => import("../shimmer-ui")),
  },
  {
    id: "infinite-scroll",
    title: "Infinite Scroll",
    component: lazy(() => import("../infinite-scroll")),
  },
];
