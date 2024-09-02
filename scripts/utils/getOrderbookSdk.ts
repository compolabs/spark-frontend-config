import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";
import config from "../data/config";

export const getOrderbookSdk = () => {
  return new SparkOrderbook({
    networkUrl: config.networkUrl,
    contractAddresses: {
      orderbook: config.contracts.orderbook,
      multiAsset: config.contracts.multiAsset,
    },
  });
};
