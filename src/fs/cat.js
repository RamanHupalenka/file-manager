import { EOL } from 'os';
import { open } from 'fs/promises';
import { catCommandPattern } from '../constants/index.js';
import { removeQuotesFromPath } from '../utils/string.js';
import { isFilePath } from '../utils/fs.js';

export const runCatCommand = async (input) => {
    const commandMatch = input.match(catCommandPattern);
    const pathToFile = removeQuotesFromPath(commandMatch[1]);
    const isArgFilePath = await isFilePath(pathToFile);

    if (isArgFilePath) {
        const readFileDescriptor = await open(pathToFile, 'r');

        const readStream = readFileDescriptor.createReadStream({
            autoClose: true,
        });

        return new Promise((res, rej) => {
            console.log('File data: ');

            readStream.on('end', () => {
                console.log(EOL);

                res();
            });

            readStream.on('error', rej);

            readStream.pipe(process.stdout);
        });
    } else {
        throw new Error('CAT operation failed');
    }
};
