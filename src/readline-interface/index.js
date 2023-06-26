import { EOL } from 'os';
import { createInterface } from 'readline/promises';
import { handleExitInput } from '../handlers/exit-handler.js';
import { handleLsInput } from '../handlers/ls-handler.js';
import { handleUpInput } from '../handlers/up-handler.js';
import { handleCdInput } from '../handlers/cd-handler.js';
import { handleOSInput } from '../handlers/os-handler.js';
import { handleCompressInput } from '../handlers/compress-handler.js';
import { handleDecompressInput } from '../handlers/decompress-handler.js';
import { handleHashInput } from '../handlers/hash-handler.js';
import { handleAddInput } from '../handlers/add-handler.js';
import { handleCatInput } from '../handlers/cat-handler.js';
import { handleCpInput } from '../handlers/cp-handler.js';
import { handleMvInput } from '../handlers/mv-handler.js';
import { handleRmInput } from '../handlers/rm-handler.js';
import { handleRnInput } from '../handlers/rn-handler.js';
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
            case formattedInput.startsWith('decompress'):
                await handleDecompressInput(formattedInput);
                break;
            case formattedInput.startsWith('hash'):
                await handleHashInput(formattedInput);
                break;
            case formattedInput.startsWith('add'):
                await handleAddInput(formattedInput);
                break;
            case formattedInput.startsWith('cat'):
                await handleCatInput(formattedInput);
                break;
            case formattedInput.startsWith('cp'):
                await handleCpInput(formattedInput);
                break;
            case formattedInput.startsWith('mv'):
                await handleMvInput(formattedInput);
                break;
            case formattedInput.startsWith('rm'):
                await handleRmInput(formattedInput);
                break;
            case formattedInput.startsWith('rn'):
                await handleRnInput(formattedInput);
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
