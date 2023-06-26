import { EOL } from 'os';
import { catCommandPattern } from '../constants/index.js';
import { runCatCommand } from '../fs/cat.js';

export const handleCatInput = async (input) => {
    try {
        const isCorrectCatCommandInput = catCommandPattern.test(input);

        if (isCorrectCatCommandInput) {
            await runCatCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
