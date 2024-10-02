import { Config } from "../types";

import packageJson from "../../package.json";

const data: Config = {
  version: packageJson.version,
  contractVer: 0,
  tokens: [],
  markets: [],
  indexers: {
    "0xbc69e42348c9a992100970e8469247b58a517c2f7dd373741c6707cda35ccfc6": {
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
    "0x10860c51de3a37c47ebff2e08a810d9e2963ef161ee3a88274520938c85914e8": {
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
  },
  contracts: {
    registry:
      "0xfc3439e66c15c0b8e8e02e0fe4951eecd6001639a6aa8a650885af62ea92540f",
    multiAsset:
      "0xdc527289bdef8ec452f350c9b2d36d464a9ebed88eb389615e512a78e26e3509",
  },
  networkUrl: "https://testnet.fuel.network/v1/graphql",
  explorerUrl: "https://app.fuel.network",
};

export default data;
