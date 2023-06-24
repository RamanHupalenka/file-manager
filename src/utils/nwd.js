import { resolve } from 'path';

export const getNextUpCommandPath = () => {
    const cwd = process.cwd();

    const nextUpCommandPath = resolve(cwd, '..');

    return nextUpCommandPath;
};
