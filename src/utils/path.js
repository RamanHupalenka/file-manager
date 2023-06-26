import { isAbsolute, resolve } from 'path';
import { diskLetterPattern } from '../constants/index.js';
import { removeQuotesFromPath } from '../utils/string.js';

export const formatPathsToAbsolute = (commandMatch) => {
    let pathToFile = removeQuotesFromPath(commandMatch[1]);
    let pathToFolder = removeQuotesFromPath(commandMatch[3]);

    if (diskLetterPattern.test(pathToFolder)) {
        pathToFolder = resolve(pathToFolder, '/');
    }

    if (!isAbsolute(pathToFile)) {
        pathToFile = resolve(process.cwd(), pathToFile);
    }

    if (!isAbsolute(pathToFolder)) {
        pathToFolder = resolve(process.cwd(), pathToFolder);
    }

    return [pathToFile, pathToFolder];
};
