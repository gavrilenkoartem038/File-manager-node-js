import { getUserName } from "./getUserName.js"

export const greeting = () => {
  const username = getUserName();
  console.log(`Welcome to the File Manager, ${username}!`);
}