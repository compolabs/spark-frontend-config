import { Indexer, Market } from "../types";

export const getIndexerInfo = (
  markets: Market[],
  indexerId: string,
  isMainnet: boolean
): Record<string, Indexer> => {
  const baseUrl = isMainnet
    ? "indexer.hyperindex.xyz"
    : "indexer.dev.hyperindex.xyz";

  return markets.reduce((prev, market) => {
    prev[market.contractId] = {
      httpUrl: `https://${baseUrl}/${indexerId}/v1/graphql`,
      wsUrl: `wss://${baseUrl}/${indexerId}/v1/graphql`,
    } as Indexer;

    return prev;
  }, {} as Record<string, Indexer>);
};
