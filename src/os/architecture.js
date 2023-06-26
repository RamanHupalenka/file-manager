import { getSystemArch } from '../utils/os.js';

export const runOSArchitectureCommand = () => {
    const arch = getSystemArch();

    console.log(`Architecture: ${arch}`);
};
