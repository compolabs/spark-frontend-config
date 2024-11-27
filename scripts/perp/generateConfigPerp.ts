import { ConfigPerp, Contracts, Links, Token } from "../types";
import { Args } from "../utils/getArgs";

interface GenerationParams {
  args: Args;
  tokens: Token[];
  links: Links;
  contracts: Contracts;
  indexerId: string;
}

export const generateConfigPerp = async ({
  args,
  contracts,
  tokens,
  links,
  indexerId,
}: GenerationParams): Promise<ConfigPerp> => {
  return {
    contractVer: 0,
    markets: [],
    indexers: {},
    contracts: {
      registry: "",
      multiAsset: "",
    },
  };
};
