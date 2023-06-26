import { getNextUpCommandPath } from '../utils/nwd.js';

export const runUpCommand = () => {
    const newPath = getNextUpCommandPath();

    process.chdir(newPath);
};
