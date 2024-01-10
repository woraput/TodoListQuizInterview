import * as StaticIcon from "./static-icon";

export enum AppIconEnum {
  EDIT = "edit",
  TRASH = "trash",
}

export const appIconMapping: Record<string, string> = {
  [AppIconEnum.EDIT]: StaticIcon.Edit,
  [AppIconEnum.TRASH]: StaticIcon.Trash,
};
