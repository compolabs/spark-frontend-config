import { Config } from "../types";

import packageJson from "../../package.json";

const data: Config = {
  version: packageJson.version,
  contractVer: 0,
  tokens: [],
  markets: [],
  indexers: {
    "0x81acb82a64ff799836c19f4e7f9871cf6d13a1e5d286e815f91c26a1b92a8195": {
      httpUrl: "https://indexer.bigdevenergy.link/db00b61/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/db00b61/v1/graphql",
    },
    "0x3830aa30ddd4843dd13b6af7ae4fb59d8c5933b1a98cba9a80897c8ba5557307": {
      httpUrl: "https://indexer.bigdevenergy.link/db00b61/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/db00b61/v1/graphql",
    },
  },
  contracts: {
    registry:
      "0xd76662328e464549b6f619401992127bed9b5cff3b46a3516e6b509d810b7035",
    multiAsset:
      "0xdc527289bdef8ec452f350c9b2d36d464a9ebed88eb389615e512a78e26e3509",
  },
  networkUrl: "https://testnet.fuel.network/v1/graphql",
  explorerUrl: "https://app.fuel.network",
};

export default data;
