import { getFinalMessageToUser } from '../utils/string.js';
import { exitCommandPattern } from '../constants/index.js';

export const handleExitInput = (input, userName) => {
    try {
        const isCorrectExitCommandInput = exitCommandPattern.test(input);

        if (isCorrectExitCommandInput) {
            const finalMessage = getFinalMessageToUser(userName);

            console.log(finalMessage);

            process.exit(0);
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
