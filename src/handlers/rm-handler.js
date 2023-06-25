import { EOL } from 'os';
import { rmCommandPattern } from '../constants/index.js';
import { runRmCommand } from '';

export const handleRmInput = async (input) => {
    try {
        const isCorrectRmCommandInput = rmCommandPattern.test(input);

        if (isCorrectRmCommandInput) {
            await runRmCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
