import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";
import { Market } from "../types";

export const getMarkets = async (
  assetPairs: [string, string][],
  orderbookSdk: SparkOrderbook
): Promise<Market[]> => {
  const markets = await orderbookSdk.fetchMarkets(assetPairs);
  const marketsIds = Object.values(markets);

  const marketConfigPromises = marketsIds.map((marketId) =>
    orderbookSdk.fetchMarketConfig(marketId)
  );

  const marketConfigs = await Promise.all(marketConfigPromises);

  return marketConfigs.map((info, index) => ({
    owner: info.owner,
    baseAssetId: info.baseAssetId,
    baseAssetDecimals: info.baseAssetDecimals,
    quoteAssetId: info.quoteAssetId,
    quoteAssetDecimals: info.quoteAssetDecimals,
    priceDecimals: info.priceDecimals,
    feeAssetId: info.feeAssetId,
    contractId: marketsIds[index],
  }));
};
