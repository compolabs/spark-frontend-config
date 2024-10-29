export interface Args {
  isMainnet: boolean;
  isDev: boolean;
  isTest: boolean;
}

export const getArgs = (env: string): Args => {
  const appArgs = {
    isMainnet: false,
    isDev: false,
    isTest: false,
  };

  if (env === "prod") {
    appArgs.isMainnet = true;
  }
  if (env === "dev") {
    appArgs.isDev = true;
  }
  if (env === "test") {
    appArgs.isTest = true;
  }

  return appArgs;
};
