import * as fs from "fs/promises";
import packageJson from "../../package.json";

import { getArgs } from "./getArgs";
import { getTokens } from "./getTokens";
import { Config, Contracts } from "../types";
import { getFileName } from "./getFileName";
import { getUrls } from "./getUrls";

import { generateConfigSpot } from "../spot/generateConfigSpot";
import { generateConfigPerp } from "../perp/generateConfigPerp";

export const generateConfig = async ({
  env,
  indexerId,
  spot: spotData,
  perp: perpData,
}: {
  env: string;
  indexerId: string;
  spot: {
    registryAddress: string;
    multiAssetAddress: string;
  };
  perp: {
    registryAddress: string;
    multiAssetAddress: string;
  };
}): Promise<Config> => {
  const args = getArgs(env);

  const links = getUrls(args);
  const tokens = getTokens();

  const spotContracts: Contracts = {
    registry: spotData.registryAddress,
    multiAsset: spotData.multiAssetAddress,
  };

  const spot = await generateConfigSpot({
    links,
    tokens,
    contracts: spotContracts,
    indexerId,
    args,
  });

  const perp = await generateConfigPerp({
    links,
    tokens,
    contracts: spotContracts,
    indexerId,
    args,
  });

  const config: Config = {
    version: packageJson.version,
    isMainnet: args.isMainnet,
    tokens,
    spot,
    perp,
    links,
  };

  const fileName = getFileName(args);

  await fs.writeFile(
    `${fileName}.json`,
    JSON.stringify(config, null, 2),
    "utf8"
  );

  return config;
};
