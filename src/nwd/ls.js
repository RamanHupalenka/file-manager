import { readdir } from 'fs/promises';

const getSortedTableList = (dirsAndFilesList) => {
    const onlyDirs = dirsAndFilesList.filter((item) => item.type === 'directory');
    const onlyFiles = dirsAndFilesList.filter((item) => item.type === 'file');

    const sortedDirs = onlyDirs.sort((a, b) => a > b);
    const sortedFiles = onlyFiles.sort((a, b) => a > b);

    return sortedDirs.concat(sortedFiles);
};

export const runLsCommand = async () => {
    const pathToDir = process.cwd();

    const dirInfo = await readdir(pathToDir, {
        withFileTypes: true,
    });

    const dirsAndFilesList = [];

    dirInfo.forEach((item) => {
        if (item.isDirectory()) {
            dirsAndFilesList.push({ name: item.name, type: 'directory' });
        } else if (item.isFile()) {
            dirsAndFilesList.push({ name: item.name, type: 'file' });
        }
    });

    const result = getSortedTableList(dirsAndFilesList);

    console.table(result);
};
