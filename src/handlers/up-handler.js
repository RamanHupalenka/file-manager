import { runUpCommand } from '../nwd/up.js';
import { upCommandPattern } from '../constants/index.js';

export const handleUpInput = (input) => {
    try {
        const isCorrectUpCommandInput = upCommandPattern.test(input);

        if (isCorrectUpCommandInput) {
            runUpCommand();
        } else {
            console.log(`Invalid input${EOL}`);
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
