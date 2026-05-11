import type {
  LazyExoticComponent,
  ComponentType,
  MutableRefObject,
} from "react";

export type ComponentProps = {
  scrollRef?: MutableRefObject<null>;
};
export type MenuItem = {
  id: string;
  title: string;
  component: LazyExoticComponent<ComponentType<ComponentProps>>;
};

export type Menu = Array<MenuItem>;
