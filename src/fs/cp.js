import { open } from 'fs/promises';
import { cpCommandPattern } from '../constants/index.js';
import { removeQuotesFromPath } from '../utils/string.js';
import { isFilePath, isFolderPath } from '../utils/fs.js';
import { join, parse } from 'path';

export const runCpCommand = async (input) => {
    const commandMatch = input.match(cpCommandPattern);
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
            readStream.on('end', () => {
                console.log(`File ${pathToFile}, successfully has been copied.`);

                res();
            });

            readStream.on('error', rej);

            writeStream.on('error', rej);

            readStream.pipe(writeStream);
        });
    } else {
        throw new Error('CP operation failed');
    }
};
