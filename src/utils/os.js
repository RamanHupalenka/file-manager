import { userInfo } from 'os';

const getUserInfo = () =>
    userInfo({
        encoding: 'utf-8',
    });

export const getUserHomeDir = () => getUserInfo().homedir;
