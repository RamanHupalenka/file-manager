import { writeFile } from 'fs/promises';
import { EOL } from 'os';
import { parse } from 'path';
import { addCommandPattern } from '../constants/index.js';
import { removeQuotesFromPath } from '../utils/string.js';

export const runAddCommand = async (input) => {
    const commandMatch = input.match(addCommandPattern);
    const pathToFile = removeQuotesFromPath(commandMatch[1]);
    const fileName = parse(pathToFile).base;

    await writeFile(fileName, EOL);

    console.log(`File ${fileName}, successfully has been created.`);
};
