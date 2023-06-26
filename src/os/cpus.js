import { getSystemCpus } from '../utils/os.js';

export const runOSCpusCommand = () => {
    const cpus = getSystemCpus();

    console.log(`CPUS amount: ${cpus.cpusAmount}`);
    console.log(`CPUS info: ${JSON.stringify(cpus.cpusInfo, null, 4)}`);
};
