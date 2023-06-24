import { userInfo, cpus, arch, EOL } from 'os';

const getUserInfo = () =>
    userInfo({
        encoding: 'utf-8',
    });

export const getUserHomeDir = () => getUserInfo().homedir;

export const getSystemUserName = () => getUserInfo().username;

export const getSystemCpus = () => {
    const systemCpus = cpus();

    const cpusInfo = systemCpus.map(({ model, speed }) => {
        const indexOfSplitter = model.indexOf('@');
        const formatterModel = indexOfSplitter > 0 ? model.slice(0, indexOfSplitter - 1) : model;

        return {
            model: formatterModel,
            speed: `${speed / 1000} GHz`,
        };
    });

    return {
        cpusAmount: cpusInfo.length,
        cpusInfo: cpusInfo,
    };
};

export const getSystemArch = () => {
    const systemArch = arch();

    return systemArch;
};

export const getSystemEOL = () => EOL;
