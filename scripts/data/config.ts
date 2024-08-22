import { Config } from "../types";

const data: Config = {
  tokens: [],
  markets: [],
  indexers: [
    {
      marketContactId: "",
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
  ],
  contracts: {
    orderbook:
      "0x164eae2ba74d71f3efb2a9adea4be8803cd464b17be841d2355f9a60301e0ff1",
  },
  networkUrl: "https://testnet.fuel.network/v1/graphql",
};

export default data;
