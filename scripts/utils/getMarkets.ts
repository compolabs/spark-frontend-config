import SparkOrderbook from "@compolabs/spark-orderbook-ts-sdk";
import { Market, Token } from "../types";

import { formatMarketName } from "./formatMarketName";

export const getMarkets = async (
  assetPairs: [Token, Token][],
  orderbookSdk: SparkOrderbook
): Promise<Market[]> => {
  const pairs = assetPairs.map(
    ([tokenA, tokenB]) => [tokenA.assetId, tokenB.assetId] as [string, string]
  );

  const markets = await orderbookSdk.fetchMarkets(pairs);
  const marketsIds = Object.values(markets);

  const marketConfigPromises = marketsIds.map((marketId) =>
    orderbookSdk.fetchMarketConfig(marketId)
  );

  const marketConfigs = await Promise.all(marketConfigPromises);

  return marketConfigs.map((info, index) => ({
    isOpen: false,
    marketName: formatMarketName(info.baseAssetId, info.quoteAssetId),
    owner: info.owner,
    baseAssetId: info.baseAssetId,
    baseAssetDecimals: info.baseAssetDecimals,
    quoteAssetId: info.quoteAssetId,
    quoteAssetDecimals: info.quoteAssetDecimals,
    priceDecimals: info.priceDecimals,
    version: info.version,
    contractId: marketsIds[index],
    precision: 0,
  }));
};
