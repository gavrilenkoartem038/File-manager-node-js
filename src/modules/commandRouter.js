import { messages } from "../constants.js";
import { splitArgs } from "../utils/utils.js";
import { osCommands } from "./os.js";

const commandsObj =  {
  'os':  {
    fn: osCommands,
    argsLength: 1,
  }
}

export const commandRouter = (input) => {
  const [command, ...cliArgs] = input.trim().split(' ');

  const isCorrectCommand = Object.keys(commandsObj).includes(command);

  if(!isCorrectCommand) {
    console.log(messages.INPUT_INVALID);
    return;
  }

  const isCorrectArgs = cliArgs.length === commandsObj[command].argsLength;

  if (isCorrectArgs && isCorrectCommand) {
    try {
      commandsObj[command].fn(cliArgs)
    } catch (error) {
      console.log(messages.OPERATION_FAILED)
    }
  } else {
    console.log(messages.INPUT_INVALID);
  }
}