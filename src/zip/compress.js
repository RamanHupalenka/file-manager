import { open } from 'fs/promises';
import { parse, resolve } from 'path';
import { createBrotliCompress } from 'zlib';
import { compressCommandPattern } from '../constants/index.js';
import { isFilePath, isFolderPath } from '../utils/fs.js';
import { formatPathsToAbsolute } from '../utils/path.js';

const performCompression = async (pathToFile, pathToFolder) => {
    const fileName = parse(pathToFile).base;
    const readFileDescriptor = await open(pathToFile, 'r');
    const zipFileName = `${fileName}.br`;
    const zipPath = resolve(pathToFolder, zipFileName);
    const writeFileDescriptor = await open(zipPath, 'w');

    const readStream = readFileDescriptor.createReadStream({
        autoClose: true,
    });

    const writeStream = writeFileDescriptor.createWriteStream({
        autoClose: true,
    });

    const compress = createBrotliCompress();

    readStream.pipe(compress).pipe(writeStream);
};

export const runCompressCommand = async (input) => {
    const commandMatch = input.match(compressCommandPattern);

    const [pathToFile, pathToFolder] = formatPathsToAbsolute(commandMatch);

    const isFirstArgFilePath = await isFilePath(pathToFile);
    const isSecondArgFolderPath = await isFolderPath(pathToFolder);

    if (isFirstArgFilePath && isSecondArgFolderPath) {
        await performCompression(pathToFile, pathToFolder);
    } else {
        throw new Error('Compression operation failed');
    }
};
