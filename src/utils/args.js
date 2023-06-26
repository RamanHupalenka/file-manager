import { userNameParamPattern } from '../constants/index.js';
import { getPredefinedUserName } from './user-info.js';

export const parseUserNameArg = () => {
    const args = process.argv.slice(2);

    const userNameParam = args.find((arg) => arg.startsWith(userNameParamPattern));

    if (userNameParam) {
        const userName = userNameParam.replace(userNameParamPattern, '');

        return userName;
    }

    const predefinedUserName = getPredefinedUserName();

    return predefinedUserName;
};
