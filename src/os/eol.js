import { getSystemEOL } from '../utils/os.js';

export const runOSEOLCommand = () => {
    const EOL = getSystemEOL();

    console.log(`EOL: ${JSON.stringify(EOL)}`);
};
