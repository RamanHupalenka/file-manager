import { isAbsolute, parse, join, resolve } from 'path';
import { cdCommandPattern, diskLetterPattern } from '../constants/index.js';

const performCdToDiskRoot = (path) => {
    const pathToDiskRoot = resolve(path, '/');

    process.chdir(pathToDiskRoot);
};

const performCdByPath = (path) => {
    const isAbsolutePath = isAbsolute(path);

    if (isAbsolutePath) {
        process.chdir(path);
    } else {
        const absolutePath = resolve(process.cwd(), path);

        process.chdir(absolutePath);
    }
};

export const runCdCommand = (input) => {
    const commandMatch = input.match(cdCommandPattern);
    const cdPath = commandMatch[2];
    const parsedPath = parse(cdPath);
    const resultPath = parsedPath.base ? join(parsedPath.dir, parsedPath.base) : parsedPath.dir;

    if (diskLetterPattern.test(resultPath)) {
        performCdToDiskRoot(resultPath);

        return;
    }

    performCdByPath(resultPath);
};
