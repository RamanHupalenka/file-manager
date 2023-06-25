import { EOL } from 'os';
import { createInterface } from 'readline/promises';
import { handleExitInput } from '../handlers/exit-handler.js';
import { handleLsInput } from '../handlers/ls-handler.js';
import { handleUpInput } from '../handlers/up-handler.js';
import { handleCdInput } from '../handlers/cd-handler.js';
import { handleOSInput } from '../handlers/os-handler.js';
import { handleCompressInput } from '../handlers/compress-handler.js';
import { getFinalMessageToUser, formatInput } from '../utils/string.js';

export const createReadLineInterface = (userName) => {
    const rli = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rli.on('line', async (input) => {
        const formattedInput = formatInput(input);

        switch (true) {
            case formattedInput.startsWith('.exit'):
                handleExitInput(formattedInput, userName);
                break;
            case formattedInput.startsWith('up'):
                handleUpInput(formattedInput);
                break;
            case formattedInput.startsWith('ls'):
                await handleLsInput(formattedInput);
                break;
            case formattedInput.startsWith('cd'):
                handleCdInput(formattedInput);
                break;
            case formattedInput.startsWith('os'):
                handleOSInput(formattedInput);
                break;
            case formattedInput.startsWith('compress'):
                await handleCompressInput(formattedInput);
                break;
            default:
                console.log(`Invalid input${EOL}`);
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
