import { getSystemUserName } from '../utils/os.js';

export const runOSUserNameCommand = () => {
    const username = getSystemUserName();

    console.log(`Username: ${username}`);
};
