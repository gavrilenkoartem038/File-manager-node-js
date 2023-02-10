import * as readline from 'node:readline';
import { stdin as input, stdin, stdout as output, stdout } from 'node:process';
import { byeUser } from './messages.js';
import { commandRouter } from '../modules/commandRouter.js';

export const createRedline = () => {
  const rl = readline.createInterface(stdin, stdout);

  rl.on('line', (input) => {
    if (input.trim() === '.exit') {
      return rl.close();
    }
    commandRouter(input);
  })
  .on('SIGINT', () => rl.close())
  .on('close', byeUser)
}