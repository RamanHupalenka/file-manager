import { open, rm as removeFile } from 'fs/promises';
import { mvCommandPattern } from '../constants/index.js';
import { removeQuotesFromPath } from '../utils/string.js';
import { isFilePath, isFolderPath } from '../utils/fs.js';
import { join, parse } from 'path';

export const runMvCommand = async (input) => {
    const commandMatch = input.match(mvCommandPattern);
    const pathToFile = removeQuotesFromPath(commandMatch[1]);
    const pathToFolder = removeQuotesFromPath(commandMatch[3]);
    const isFirstArgFilePath = await isFilePath(pathToFile);
    const isSecondArgFolderPath = await isFolderPath(pathToFolder);

    if (isFirstArgFilePath && isSecondArgFolderPath) {
        const readFileDescriptor = await open(pathToFile, 'r');
        const fileName = parse(pathToFile).base;
        const newPathToFile = join(pathToFolder, fileName);
        const writeFileDescriptor = await open(newPathToFile, 'w');

        const readStream = readFileDescriptor.createReadStream({
            autoClose: true,
        });

        const writeStream = writeFileDescriptor.createWriteStream({
            autoClose: true,
        });

        return new Promise((res, rej) => {
            readStream.on('end', async () => {
                await removeFile(pathToFile, {
                    force: true,
                    maxRetries: 3,
                    retryDelay: 500,
                });

                console.log(`File ${pathToFile}, successfully has been moved.`);

                res();
            });

            readStream.on('error', rej);

            writeStream.on('error', rej);

            readStream.pipe(writeStream);
        });
    } else {
        throw new Error('MV operation failed');
    }
};
