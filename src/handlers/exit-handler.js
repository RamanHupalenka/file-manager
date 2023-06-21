import { getFinalMessageToUser } from '../utils/string.js';
import { exitPattern } from '../constants/index.js';

export const handleExitInput = (input, userName) => {
    const isExitCommandInput = exitPattern.test(input);

    if (isExitCommandInput) {
        const finalMessage = getFinalMessageToUser(userName);

        console.log(finalMessage);

        process.exit(0);
    }
};
