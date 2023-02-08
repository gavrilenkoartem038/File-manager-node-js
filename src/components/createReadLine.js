import * as readline from 'node:readline';
import { stdin as input, stdin, stdout as output, stdout } from 'node:process';

export const createRedline = () => {
  const rl = readline.createInterface(stdin, stdout);

  rl.on('line', (input) => {
    if (input === '.exit') {
      return rl.close();
    }
    console.log('input: ' + input);
  })
  .on('SIGINT', () => rl.close())
  .on('close', () => console.log('buy'))
}