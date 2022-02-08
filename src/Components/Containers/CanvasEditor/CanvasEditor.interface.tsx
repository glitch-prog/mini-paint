import { SetStateAction } from "react";

export interface ISetColorHook {
  color: string;
}

export interface ISaved {
  saved: string;
  setSaved: SetStateAction<string>;
}