import { ConfigSpot, Contracts, Links, Token } from "../types";
import { Args } from "../utils/getArgs";
import { getIndexerInfo } from "../utils/getIndexerInfo";
import { getOrderbookSdk } from "./getOrderbookSdk";
import { getMarkets } from "./getMarkets";

interface GenerationParams {
  args: Args;
  tokens: Token[];
  links: Links;
  contracts: Contracts;
  indexerId: string;
}

export const generateConfigSpot = async ({
  args,
  contracts,
  tokens,
  links,
  indexerId,
}: GenerationParams): Promise<ConfigSpot> => {
  const sdk = getOrderbookSdk(contracts, links.networkUrl);

  const markets = await getMarkets(tokens, sdk);

  const contractConfig = await sdk.getVersion();

  const indexers = getIndexerInfo(markets, indexerId, args.isMainnet);

  return {
    contractVer: contractConfig.version,
    markets,
    indexers,
    contracts,
  };
};
