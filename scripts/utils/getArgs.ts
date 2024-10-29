export interface Args {
  isMainnet: boolean;
  isDev: boolean;
  isTest: boolean;
}

export const getArgs = (): Args => {
  const args = process.argv.slice(2);

  const appArgs = {
    isMainnet: false,
    isDev: false,
    isTest: false,
  };

  args.forEach((arg) => {
    if (arg === "--mainnet") {
      appArgs.isMainnet = true;
    }
    if (arg === "--dev") {
      appArgs.isDev = true;
    }
    if (arg === "--test") {
      appArgs.isTest = true;
    }
  });

  return appArgs;
};
