import { EOL } from 'os';
import { createInterface } from 'readline/promises';
import { handleExitInput } from '../handlers/exit-handler.js';
import { handleUpInput } from '../handlers/up-handler.js';
import { getFinalMessageToUser } from '../utils/string.js';

export const createReadLineInterface = (userName) => {
    const rli = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rli.on('line', (input) => {
        const formattedInput = input.trim();

        switch (true) {
            case formattedInput.startsWith('.exit'):
                handleExitInput(formattedInput, userName);
                break;
            case formattedInput.startsWith('up'):
                handleUpInput(formattedInput);
                break;
            default:
                console.log(`${EOL}Invalid input${EOL}`);
                break;
        }

        console.log(`You are currently in ${process.cwd()}${EOL}`);
    });

    rli.on('SIGINT', () => {
        const finalMessage = getFinalMessageToUser(userName);

        console.log(finalMessage);

        process.exit(0);
    });

    return rli;
};
