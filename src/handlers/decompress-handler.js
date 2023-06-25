import { EOL } from 'os';
import { decompressCommandPattern } from '../constants/index.js';
import { runDecompressCommand } from '../zip/decompress.js';

export const handleDecompressInput = async (input) => {
    try {
        const isCorrectDecompressCommandInput = decompressCommandPattern.test(input);

        if (isCorrectDecompressCommandInput) {
            await runDecompressCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
