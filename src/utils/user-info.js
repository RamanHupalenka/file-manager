import { getSystemUserName } from './os.js';
import { anonymousUserName } from '../constants/index.js';

export const getPredefinedUserName = () => {
    const systemUserName = getSystemUserName();

    return systemUserName || anonymousUserName;
};
