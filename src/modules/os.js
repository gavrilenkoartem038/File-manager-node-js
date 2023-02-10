import os from 'os'
import { messages } from '../constants.js';

export const osCommands = ([arg]) => {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(os.EOL));
      break;
    case '--cpus':
      const cpuInfo = os.cpus().map((el) => {
        return {
          model: el.model,
          speed: `${el.speed/1000} GHz`
        }
      })
      console.log(cpuInfo)
      break;
    case '--homedir':
      console.log(`Homedir: ${os.homedir()}`);
      break;
    case '--username':
      console.log(`Username: ${os.userInfo().username}`);
      break;
    case '--architecture':
      console.log(`Cpu architecture: ${os.arch()}`);
      break;
    default:
      console.log(messages.INPUT_INVALID);
  }

}