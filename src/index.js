import { EOL } from 'os';
import { createReadLineInterface } from './readline-interface/index.js';
import { parseUserNameArg } from './utils/args.js';
import { getUserHomeDir } from './utils/os.js';

const runFileManager = () => {
    const userName = parseUserNameArg();

    createReadLineInterface(userName);

    console.log(`Welcome to the File Manager, ${userName}!${EOL}`);

    console.log(`You are currently in ${process.cwd()}${EOL}`);
};

const userHomeDir = getUserHomeDir();

process.chdir(userHomeDir);

runFileManager();
