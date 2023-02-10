import { getUserName } from "./getUserName.js"

const username = getUserName();

export const greeting = () => {
  console.log(`Welcome to the File Manager, ${username}!`);
}

export const byeUser = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
}