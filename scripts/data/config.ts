import { Config } from "../types";

import packageJson from "../../package.json";

const data: Config = {
  version: packageJson.version,
  contractVer: 0,
  tokens: [],
  markets: [],
  indexers: {
    "0x7b88385ae73dd3ccc62012e7a52cddd05c7e82ad54a5df721dfa0c1f8b5998f0": {
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
    "0xc18094a283193c9b4726d2f644ed07ec9806bbe60a0688d45bffb26c379c1428": {
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
  },
  contracts: {
    registry:
      "0x194987ad2314d2de50646078ac1841f00b2dffda863a7d3dd421d220eb83d019",
    multiAsset:
      "0xdc527289bdef8ec452f350c9b2d36d464a9ebed88eb389615e512a78e26e3509",
  },
  networkUrl: "https://testnet.fuel.network/v1/graphql",
  explorerUrl: "https://app.fuel.network",
};

export default data;
