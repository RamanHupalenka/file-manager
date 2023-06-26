import { getUserHomeDir } from '../utils/os.js';

export const runOSHomeDirCommand = () => {
    const homedir = getUserHomeDir();

    console.log(`Home directory: ${homedir}`);
};
