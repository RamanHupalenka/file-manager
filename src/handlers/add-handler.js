import { EOL } from 'os';
import { addCommandPattern } from '../constants/index.js';
import { runAddCommand } from '../fs/add.js';

export const handleAddInput = async (input) => {
    try {
        const isCorrectAddCommandInput = addCommandPattern.test(input);

        if (isCorrectAddCommandInput) {
            await runAddCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
