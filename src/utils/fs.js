import { stat } from 'fs/promises';

export const isFilePath = async (path) => {
    const pathInfo = await stat(path);
    const isFilePath = pathInfo.isFile();

    return isFilePath;
};

export const isFolderPath = async (path) => {
    const pathInfo = await stat(path);
    const isFilePath = pathInfo.isDirectory();

    return isFilePath;
};
