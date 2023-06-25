export const userNameParamPattern = '--username=';
export const anonymousUserName = 'Anonymous';
export const diskLetterPattern = /^[a-zA-Z]\:$/;

export const exitCommandPattern = /^\.exit$/;
export const upCommandPattern = /^up$/;
export const lsCommandPattern = /^ls$/;
export const cdCommandPattern = /^(\s*cd\s+)+(.+)$/;

export const osEOLPattern = /^\s*os\s+\-\-EOL\s*$/;
export const osCpusPattern = /^\s*os\s+\-\-cpus\s*$/;
export const osHomedirPattern = /^\s*os\s+\-\-homedir\s*$/;
export const osUserNamePattern = /^\s*os\s+\-\-username\s*$/;
export const osArchitecturePattern = /^\s*os\s+\-\-architecture\s*$/;

export const compressCommandPattern = /^\s*compress\s+(\S+|["']{1}.+["']{1}){1}\s+(\S+|["']{1}.+["']{1}){1}\s*$/;
export const decompressCommandPattern = /^\s*decompress\s+(\S+|["']{1}.+["']{1}){1}\s+(\S+|["']{1}.+["']{1}){1}\s*$/;
