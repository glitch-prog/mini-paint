import { MouseEventHandler } from "react";

export interface IToolbar {
  active: boolean;
  handleClickSetAction: () => void;
  handleClickSetTool: MouseEventHandler<HTMLButtonElement>;
}
