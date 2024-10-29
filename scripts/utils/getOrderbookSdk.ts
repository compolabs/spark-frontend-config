import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";
import { Config } from "../types";

export const getOrderbookSdk = (config: Config) => {
  return new SparkOrderbook({
    networkUrl: config.networkUrl,
    contractAddresses: {
      registry: config.contracts.registry,
      multiAsset: config.contracts.multiAsset,
    },
  });
};
