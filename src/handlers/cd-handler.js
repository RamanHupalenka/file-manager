import { EOL } from 'os';
import { cdCommandPattern } from '../constants/index.js';
import { runCdCommand } from '../nwd/cd.js';

export const handleCdInput = (input) => {
    try {
        const isCorrectCdCommandInput = cdCommandPattern.test(input);

        if (isCorrectCdCommandInput) {
            runCdCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
