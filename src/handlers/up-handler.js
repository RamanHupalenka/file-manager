import { runUpCommand } from '../nwd/up.js';
import { upCommandPattern } from '../constants/index.js';

export const handleUpInput = (input) => {
    const isCorrectUpCommandInput = upCommandPattern.test(input);

    if (isCorrectUpCommandInput) {
        runUpCommand();
    } else {
        console.log(`Invalid input${EOL}`);
    }
};
