import { Config } from "../types";

import packageJson from "../../package.json";

const data: Config = {
  version: packageJson.version,
  contractVer: 0,
  tokens: [],
  markets: [],
  indexers: {
    "0x58959d086d8a6ee8cf8eeb572b111edb21661266be4b4885383748d11b72d0aa": {
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
  },
  contracts: {
    orderbook:
      "0x0713334e61ed73ba9421a3a49891953f9ccb7353828566b569752a82a39803e8",
    multiAsset:
      "0xdc527289bdef8ec452f350c9b2d36d464a9ebed88eb389615e512a78e26e3509",
  },
  networkUrl: "https://testnet.fuel.network/v1/graphql",
  explorerUrl: "https://app.fuel.network",
};

export default data;
