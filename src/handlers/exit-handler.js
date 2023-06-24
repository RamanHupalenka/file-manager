import { getFinalMessageToUser } from '../utils/string.js';
import { exitPattern } from '../constants/index.js';

export const handleExitInput = (input, userName) => {
    const isCorrectExitCommandInput = exitPattern.test(input);

    if (isCorrectExitCommandInput) {
        const finalMessage = getFinalMessageToUser(userName);

        console.log(finalMessage);

        process.exit(0);
    } else {
        console.log(`Invalid input${EOL}`);
    }
};
