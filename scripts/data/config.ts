import { Config } from "../types";

import packageJson from "../../package.json";

const data: Config = {
  version: packageJson.version,
  contractVer: 0,
  tokens: [],
  markets: [],
  indexers: {
    "0x2e9f781674f292d4db1ad150e7685e1f1ebad3c1ba403a64fff54b019ed70765": {
      httpUrl: "https://indexer.bigdevenergy.link/3a4b442/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/3a4b442/v1/graphql",
    },
    "0x9bc5f33c9a1bec6461500cd85b3ba1d8f0094a865b6b9c4367631e4111d0305d": {
      httpUrl: "https://indexer.bigdevenergy.link/49e6c4e/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/49e6c4e/v1/graphql",
    },
  },
  contracts: {
    orderbook:
      "0x0911d52d95a71dd484690636fb81db8596f54ee18fe5eb7e33842025d1dd80de",
    multiAsset:
      "0xdc527289bdef8ec452f350c9b2d36d464a9ebed88eb389615e512a78e26e3509",
  },
  networkUrl: "https://testnet.fuel.network/v1/graphql",
  explorerUrl: "https://app.fuel.network",
};

export default data;
