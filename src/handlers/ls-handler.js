import { runLsCommand } from '../nwd/ls.js';
import { lsCommandPattern } from '../constants/index.js';

export const handleLsInput = async (input) => {
    try {
        const isCorrectLsCommandInput = lsCommandPattern.test(input);

        if (isCorrectLsCommandInput) {
            await runLsCommand();
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
