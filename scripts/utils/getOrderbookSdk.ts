import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";
import config from "../data/config";

export const getOrderbookSdk = () => {
  return new SparkOrderbook({
    networkUrl: config.networkUrl,
    contractAddresses: {
      market: "",
      orderbook: config.contracts.orderbook,
      tokenFactory: "",
    },
    indexerConfig: {
      httpUrl: config.indexers[0].httpUrl,
      wsUrl: config.indexers[0].wsUrl,
    },
  });
};
