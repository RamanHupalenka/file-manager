import { createHash } from 'crypto';
import { open } from 'fs/promises';
import { hashCommandPattern } from '../constants/index.js';
import { isFilePath } from '../utils/fs.js';
import { removeQuotesFromPath } from '../utils/string.js';

const performHashCalculation = async (path) => {
    const hash = createHash('sha256');
    const readFileDescriptor = await open(path, 'r');
    const readStream = readFileDescriptor.createReadStream({
        autoClose: true,
    });

    return new Promise((res, rej) => {
        readStream.on('data', (chunk) => {
            hash.update(chunk);
        });

        readStream.on('end', () => {
            res(hash.digest('hex'));
        });

        readStream.on('error', (err) => {
            rej(err);
        });
    });
};

export const runHashCommand = async (input) => {
    const commandMatch = input.match(hashCommandPattern);
    const pathToFile = removeQuotesFromPath(commandMatch[1]);
    const isArgFilePath = await isFilePath(pathToFile);

    if (isArgFilePath) {
        const hash = await performHashCalculation(pathToFile);

        console.log(`File hash: ${hash}`);
    } else {
        throw new Error('Hash operation failed');
    }
};
