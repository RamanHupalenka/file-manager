import { EOL } from 'os';

export const formatInput = (input) => input.trim(EOL);

export const isInputEmpty = (username) => username.length === 0;

export const getFinalMessageToUser = (userName) =>
    `${EOL}Thank you for using File Manager, ${userName}, goodbye!${EOL}`;

export const removeQuotesFromPath = (path) => {
    const isFirstSymbolQuote = path[0] === "'" || path[0] === '"';
    const isLastSymbolQuote = path[path.length - 1] === "'" || path[path.length - 1] === '"';

    if (isFirstSymbolQuote && isLastSymbolQuote) {
        return path.slice(1, path.length - 1);
    }

    return path;
};
