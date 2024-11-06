import { Indexer, Market } from "../types";

export const getIndexerInfo = (
  markets: Market[],
  indexerId: string
): Record<string, Indexer> => {
  return markets.reduce((prev, market) => {
    prev[market.contractId] = {
      httpUrl: `https://indexer.dev.hyperindex.xyz/${indexerId}/v1/graphql`,
      wsUrl: `wss://indexer.dev.hyperindex.xyz/${indexerId}/v1/graphql`,
    } as Indexer;

    return prev;
  }, {} as Record<string, Indexer>);
};
