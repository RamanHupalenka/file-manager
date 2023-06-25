import { EOL } from 'os';
import { mvCommandPattern } from '../constants/index.js';
import { runMvCommand } from '';

export const handleMvInput = async (input) => {
    try {
        const isCorrectMvCommandInput = mvCommandPattern.test(input);

        if (isCorrectMvCommandInput) {
            await runMvCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
