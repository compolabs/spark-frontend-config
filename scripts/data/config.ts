import { Config } from "../types";

import packageJson from "../../package.json";

const data: Config = {
  version: packageJson.version,
  isMainnet: false,
  contractVer: 0,
  tokens: [],
  markets: [],
  indexers: {
    "0xc5ed0d9b17beedd1c6c10a84bb496f12a5082aa3ce2ad55630bbcac22c64fcf4": {
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
    "0x944a3d62e65f3aefa7ac4a065eb9390a98806ef254aaece6df239ee78e6c2998": {
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
  },
  contracts: {
    registry:
      "0x0c26b7134516773469cd02030a783e43776d1fd26e0698b51af3cef4938e2925",
    multiAsset:
      "0xdc527289bdef8ec452f350c9b2d36d464a9ebed88eb389615e512a78e26e3509",
  },
  networkUrl: "https://testnet.fuel.network/v1/graphql",
  explorerUrl: "https://app-testnet.fuel.network",
};

export default data;
