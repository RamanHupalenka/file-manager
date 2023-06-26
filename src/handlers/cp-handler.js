import { EOL } from 'os';
import { cpCommandPattern } from '../constants/index.js';
import { runCpCommand } from '../fs/cp.js';

export const handleCpInput = async (input) => {
    try {
        const isCorrectCpCommandInput = cpCommandPattern.test(input);

        if (isCorrectCpCommandInput) {
            await runCpCommand(input);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
