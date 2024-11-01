import * as fs from "fs/promises";
import config from "../data/config";
import { getOrderbookSdk } from "./getOrderbookSdk";
import { getArgs } from "./getArgs";
import { getMarkets } from "./getMarkets";
import { getTokens } from "./getTokens";
import { generateUniquePairs } from "./generateUniquePairs";
import { Config } from "../types";
import { getFileName } from "./getFileName";
import { getUrls } from "./getUrls";
import { getIndexerInfo } from "./getIndexerInfo";

export const generateConfig = async ({
  env,
  indexerId,
  registryAddress,
  multiAssetAddress,
}: {
  env: string;
  indexerId: string;
  registryAddress: string;
  multiAssetAddress: string;
}): Promise<Config> => {
  const args = getArgs(env);

  const urls = getUrls(args);

  const baseConfig: Config = {
    ...config,
    isMainnet: args.isMainnet,
    indexers: { ...config.indexers },
    contracts: {
      ...config.contracts,
      registry: registryAddress,
      multiAsset: multiAssetAddress,
    },
    networkUrl: urls.networkUrl,
    explorerUrl: urls.explorerUrl,
  };

  const sdk = getOrderbookSdk(baseConfig);

  const tokens = getTokens();
  const pairs = generateUniquePairs(tokens);

  const markets = await getMarkets(pairs, sdk);

  const contractConfig = await sdk.getVersion();

  const indexers = getIndexerInfo(markets, indexerId);

  const extendedConfig: Config = {
    ...baseConfig,
    contractVer: contractConfig.version,
    tokens: [...baseConfig.tokens, ...tokens],
    markets: [...baseConfig.markets, ...markets],
    indexers,
  };

  const fileName = getFileName(args);

  await fs.writeFile(
    `${fileName}.json`,
    JSON.stringify(extendedConfig, null, 2),
    "utf8"
  );

  return extendedConfig;
};
