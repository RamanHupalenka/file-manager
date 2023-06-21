import { userInfo } from 'os';
import { anonymousUserName } from '../constants/index.js';

const getSystemUserName = () =>
    userInfo({
        encoding: 'utf-8',
    }).username;

export const getPredefinedUserName = () => {
    const systemUserName = getSystemUserName();

    return systemUserName || anonymousUserName;
};
