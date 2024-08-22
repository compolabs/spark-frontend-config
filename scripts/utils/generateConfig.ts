import * as fs from "fs/promises";
import config from "../data/config";
import { getOrderbookSdk } from "./getOrderbookSdk";
import { getMarkets } from "./getMarkets";
import { getTokens } from "./getTokens";
import { generateUniquePairs } from "./generateUniquePairs";
import { Config } from "../types";

export const generateConfig = async (): Promise<void> => {
  const sdk = getOrderbookSdk();
  const baseConfig = config;

  const tokens = getTokens();
  const pairs = generateUniquePairs(tokens);

  const markets = await getMarkets(pairs, sdk);

  const newConfig: Config = {
    ...baseConfig,
    tokens: [...baseConfig.tokens, ...tokens],
    markets: [...baseConfig.markets, ...markets],
    indexers: [...baseConfig.indexers],
    contracts: {
      ...baseConfig.contracts,
    },
  };

  await fs.writeFile("config.json", JSON.stringify(newConfig, null, 2), "utf8");
};
