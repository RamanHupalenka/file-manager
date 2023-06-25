export const userNameParamPattern = '--username=';
export const anonymousUserName = 'Anonymous';
export const diskLetterPattern = /^[a-zA-Z]\:$/;

export const exitCommandPattern = /^\.exit$/;
export const upCommandPattern = /^up$/;
export const lsCommandPattern = /^ls$/;
export const cdCommandPattern = /^cd\s+(.+)$/;

export const osEOLPattern = /^os\s+\-\-EOL$/;
export const osCpusPattern = /^os\s+\-\-cpus$/;
export const osHomedirPattern = /^os\s+\-\-homedir$/;
export const osUserNamePattern = /^os\s+\-\-username$/;
export const osArchitecturePattern = /^os\s+\-\-architecture$/;

export const compressCommandPattern = /^compress\s+(\S+|["']{1}([^"'])+["']{1}){1}\s+(\S+|["']{1}([^"'])+["']{1}){1}$/;
export const decompressCommandPattern =
    /^decompress\s+(\S+|["']{1}([^"'])+["']{1}){1}\s+(\S+|["']{1}([^"'])+["']{1}){1}$/;

export const hashCommandPattern = /^hash\s+(.+)$/;
