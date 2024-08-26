import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";
import config from "../data/config";

export const getOrderbookSdk = () => {
  return new SparkOrderbook({
    networkUrl: config.networkUrl,
    contractAddresses: {
      market: "",
      orderbook: config.contracts.orderbook,
      multiAsset: config.contracts.multiAsset,
    },
    indexerConfig: {
      // Mock
      httpUrl: "https://indexer.bigdevenergy.link/67b693c/v1/graphql",
      wsUrl: "wss://indexer.bigdevenergy.link/67b693c/v1/graphql",
    },
  });
};
