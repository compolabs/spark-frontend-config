export const getArgs = () => {
  const args = process.argv.slice(2);

  const appArgs = {
    isDev: false,
  };

  args.forEach((arg) => {
    if (arg === "--dev") {
      appArgs.isDev = true;
    }
  });

  return appArgs;
};
