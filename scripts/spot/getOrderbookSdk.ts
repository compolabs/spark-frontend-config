import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";
import { Contracts } from "../types";

export const getOrderbookSdk = (contracts: Contracts, networkUrl: string) => {
  return new SparkOrderbook({
    networkUrl: networkUrl,
    contractAddresses: {
      registry: contracts.registry,
      multiAsset: contracts.multiAsset,
    },
  });
};
