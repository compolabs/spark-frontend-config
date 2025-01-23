import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";

export const getMarketsInfo = (sdk: SparkOrderbook, addresses: string[]) => {
  const markets = Promise.all(
    addresses.map((address) => sdk.fetchMarketConfig(address))
  );

  return markets;
};
