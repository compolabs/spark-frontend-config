import * as fs from "fs/promises";
import config from "../data/config";
import { getOrderbookSdk } from "./getOrderbookSdk";
import { getArgs } from "./getArgs";
import { getMarkets } from "./getMarkets";
import { getTokens } from "./getTokens";
import { generateUniquePairs } from "./generateUniquePairs";
import { Config } from "../types";

export const generateConfig = async (): Promise<void> => {
  const { isDev } = getArgs();
  const sdk = getOrderbookSdk();
  const baseConfig = config;

  const tokens = getTokens();
  const pairs = generateUniquePairs(tokens);

  const markets = await getMarkets(pairs, sdk);

  const contractConfig = await sdk.getVersion();

  const newConfig: Config = {
    ...baseConfig,
    contractVer: contractConfig.version,
    tokens: [...baseConfig.tokens, ...tokens],
    markets: [...baseConfig.markets, ...markets],
    indexers: { ...baseConfig.indexers },
    contracts: {
      ...baseConfig.contracts,
    },
  };

  const fileName = isDev ? "config-dev" : "config";

  await fs.writeFile(
    `${fileName}.json`,
    JSON.stringify(newConfig, null, 2),
    "utf8"
  );
};
