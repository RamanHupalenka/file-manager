import { rm as removeFile } from 'fs/promises';
import { rmCommandPattern } from '../constants/index.js';
import { removeQuotesFromPath } from '../utils/string.js';
import { isFilePath } from '../utils/fs.js';

export const runRmCommand = async (input) => {
    const commandMatch = input.match(rmCommandPattern);
    const pathToFile = removeQuotesFromPath(commandMatch[1]);
    const isArgFilePath = await isFilePath(pathToFile);

    if (isArgFilePath) {
        await removeFile(pathToFile, {
            force: true,
            maxRetries: 3,
            retryDelay: 500,
        });

        console.log(`File ${pathToFile}, successfully has been removed.`);
    } else {
        throw new Error('RM operation failed');
    }
};
