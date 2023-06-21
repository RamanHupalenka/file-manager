import { EOL } from 'os';
import { createReadLineInterface } from './readline-interface/index.js';
import { parseUserNameArg } from './utils/args.js';

const runFileManager = () => {
    const userName = parseUserNameArg();

    const rli = createReadLineInterface(userName);

    console.log(`Welcome to the File Manager, ${userName}!${EOL}`);
};

runFileManager();
