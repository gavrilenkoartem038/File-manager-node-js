import { argv } from "process"

export const getUserName = () => {
  try {
    const username = argv.slice(2).find((arg) => arg.startsWith('--username')).split('=')[1];
    return username ? username : 'noNameUser';
    
  } catch {
    return 'noNameUser'
  }
}