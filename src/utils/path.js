import { isAbsolute, resolve } from 'path';
import { diskLetterPattern } from '../constants/index.js';

export const formatPathsToAbsolute = (pathToFile, pathToFolder) => {
    if (diskLetterPattern.test(pathToFolder)) {
        pathToFolder = resolve(pathToFolder, '/');
    }

    if (!isAbsolute(pathToFile)) {
        pathToFile = resolve(process.cwd(), pathToFile);
    }

    if (!isAbsolute(pathToFolder)) {
        pathToFolder = resolve(process.cwd(), pathToFolder);
    }
};
