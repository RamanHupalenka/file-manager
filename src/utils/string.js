import { EOL } from 'os';

export const formatUserNameInput = (username) => username.trim(EOL);

export const isInputEmpty = (username) => username.length === 0;

export const getFinalMessageToUser = (userName) =>
    `${EOL}Thank you for using File Manager, ${userName}, goodbye!${EOL}`;
