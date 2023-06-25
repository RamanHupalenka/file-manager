import { open } from 'fs/promises';
import { parse, resolve } from 'path';
import { createBrotliDecompress } from 'zlib';
import { decompressCommandPattern } from '../constants/index.js';
import { isFilePath, isFolderPath } from '../utils/fs.js';
import { removeQuotesFromPath } from '../utils/string.js';
import { formatPathsToAbsolute } from '../utils/path.js';

const performDecompression = async (pathToFile, pathToFolder) => {
    const zipFileName = parse(pathToFile).base;
    const readFileDescriptor = await open(pathToFile, 'r');
    const fileName = zipFileName.replace('.br', '');
    const filePath = resolve(pathToFolder, fileName);
    const writeFileDescriptor = await open(filePath, 'w');

    const readStream = readFileDescriptor.createReadStream({
        autoClose: true,
    });

    const writeStream = writeFileDescriptor.createWriteStream({
        autoClose: true,
    });

    const decompress = createBrotliDecompress();

    readStream.pipe(decompress).pipe(writeStream);
};

export const runDecompressCommand = async (input) => {
    const commandMatch = input.match(decompressCommandPattern);

    let pathToFile = removeQuotesFromPath(commandMatch[1]);
    let pathToFolder = removeQuotesFromPath(commandMatch[3]);

    formatPathsToAbsolute(pathToFile, pathToFolder);

    const isFirstArgFilePath = await isFilePath(pathToFile);
    const isSecondArgFolderPath = await isFolderPath(pathToFolder);

    if (isFirstArgFilePath && isSecondArgFolderPath) {
        await performDecompression(pathToFile, pathToFolder);
    } else {
        throw new Error('Decompression operation failed');
    }
};
