import { EOL } from 'os';
import {
    osEOLPattern,
    osCpusPattern,
    osHomedirPattern,
    osUserNamePattern,
    osArchitecturePattern,
} from '../constants/index.js';
import { runOSArchitectureCommand } from '../os/architecture.js';
import { runOSCpusCommand } from '../os/cpus.js';
import { runOSEOLCommand } from '../os/eol.js';
import { runOSHomeDirCommand } from '../os/homedir.js';
import { runOSUserNameCommand } from '../os/username.js';

export const handleOSInput = async (input) => {
    try {
        switch (true) {
            case osEOLPattern.test(input):
                runOSEOLCommand();
                break;
            case osCpusPattern.test(input):
                runOSCpusCommand();
                break;
            case osHomedirPattern.test(input):
                runOSHomeDirCommand();
                break;
            case osUserNamePattern.test(input):
                runOSUserNameCommand();
                break;
            case osArchitecturePattern.test(input):
                runOSArchitectureCommand();
                break;
            default:
                console.log(`Invalid input${EOL}`);
                break;
        }
    } catch {
        console.error(`Operation failed${EOL}`);
    }
};
