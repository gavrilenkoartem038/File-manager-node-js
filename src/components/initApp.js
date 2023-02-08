import { createRedline } from "./createReadLine.js";
import { greeting } from "./messages.js"

export const initApp = () => {
  greeting();
  createRedline();
}