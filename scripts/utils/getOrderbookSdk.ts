import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";
import config from "../data/config";

export const getOrderbookSdk = () => {
  return new SparkOrderbook({
    networkUrl: config.networkUrl,
    contractAddresses: {
      registry: config.contracts.registry,
      multiAsset: config.contracts.multiAsset,
    },
  });
};
