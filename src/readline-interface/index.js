import { createInterface } from 'readline/promises';
import { handleExitInput } from '../handlers/exit-handler.js';
import { getFinalMessageToUser } from '../utils/string.js';

export const createReadLineInterface = (userName) => {
    const rli = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rli.on('line', (input) => {
        handleExitInput(input, userName);
    });

    rli.on('SIGINT', () => {
        const finalMessage = getFinalMessageToUser(userName);

        console.log(finalMessage);

        process.exit(0);
    });

    return rli;
};
