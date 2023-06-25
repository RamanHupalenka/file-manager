import { EOL } from 'os';
import { rnCommandPattern } from '../constants/index.js';
import { runRnCommand } from '';

export const handleRnInput = async (input) => {
    try {
        const isCorrectRnCommandInput = rnCommandPattern.test(input);

        if (isCorrectRnCommandInput) {
            await runRnCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
