import { rename } from 'fs/promises';
import { parse, join } from 'path';
import { rnCommandPattern } from '../constants/index.js';
import { removeQuotesFromPath } from '../utils/string.js';

export const runRnCommand = async (input) => {
    const commandMatch = input.match(rnCommandPattern);
    const pathToFile = removeQuotesFromPath(commandMatch[1]);
    const fileNameArg = removeQuotesFromPath(commandMatch[3]);
    const fileName = parse(fileNameArg).base;
    const dir = parse(pathToFile).dir;
    const newPathToFile = join(dir, fileName);

    await rename(pathToFile, newPathToFile);

    console.log(`File ${fileName}, successfully has been renamed.`);
};
