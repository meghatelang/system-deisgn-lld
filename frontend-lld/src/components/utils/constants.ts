import { lazy } from "react";
import type { Menu } from "../../types";

export const MENU: Menu = [
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
  {
    id: "accordion",
    title: "Accordion",
    component: lazy(() => import("../accordion")),
  },
  {
    id: "multi-accordion",
    title: "Multi Accordion",
    component: lazy(() => import("../multi-accordion")),
  },
  {
    id: "nested-comments",
    title: "Reddit Nested Comments",
    component: lazy(() => import("../nested-comments")),
  },
  {
    id: "image-slider",
    title: "Image Slider",
    component: lazy(() => import("../image-slider")),
  },
  {
    id: "autocomplete-search",
    title: "Autocomplete Search",
    component: lazy(() => import("../autocomplete-search")),
  },
  {
    id: "progress-bar",
    title: "Progress Bar",
    component: lazy(() => import("../progress-bar")),
  },
];

export const ACCORDION_DATA = [
  {
    title: "Accordion Item #1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #2",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #3",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];
