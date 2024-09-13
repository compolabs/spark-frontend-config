import { Config } from "../types";

import packageJson from "../../package.json";

const data: Config = {
  version: packageJson.version,
  contractVer: 0,
  tokens: [],
  markets: [],
  indexers: {
    "0x416ccdaf69881ae345537b1844d1511b4103379fca43b8c2190aae8b42f08173": {
      httpUrl: "https://indexer.bigdevenergy.link/7b34f67/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/7b34f67/v1/graphql",
    },
    "0x7d1da52a221897ebc88dc6a5d4623e704f7d64022d498b0438827dd79b6e5457": {
      httpUrl: "https://indexer.bigdevenergy.link/4991bb0/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/4991bb0/v1/graphql",
    },
  },
  contracts: {
    orderbook:
      "0x8f7935292f3da69aec797926029c864d7ec6d03c72f7347b4fd517ba4a7b78fb",
    multiAsset:
      "0xdc527289bdef8ec452f350c9b2d36d464a9ebed88eb389615e512a78e26e3509",
  },
  networkUrl: "https://testnet.fuel.network/v1/graphql",
  explorerUrl: "https://app.fuel.network",
};

export default data;
