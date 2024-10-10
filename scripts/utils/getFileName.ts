import { Args } from "./getArgs";

export const getFileName = ({ isDev, isTest }: Args) => {
  if (isDev) {
    return "config-dev";
  } else if (isTest) {
    return "config-test";
  }

  return "config";
};
