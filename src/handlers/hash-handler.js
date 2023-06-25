import { EOL } from 'os';
import { hashCommandPattern } from '../constants/index.js';
import { runHashCommand } from '../hash/index.js';

export const handleHashInput = async (input) => {
    try {
        const isCorrectHashCommandInput = hashCommandPattern.test(input);

        if (isCorrectHashCommandInput) {
            await runHashCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
