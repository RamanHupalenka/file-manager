import { EOL } from 'os';
import { compressCommandPattern } from '../constants/index.js';
import { runCompressCommand } from '../zip/compress.js';

export const handleCompressInput = async (input) => {
    try {
        const isCorrectCompressCommandInput = compressCommandPattern.test(input);

        if (isCorrectCompressCommandInput) {
            await runCompressCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
