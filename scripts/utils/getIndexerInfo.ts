import { Indexer, Market } from "../types";

export const getIndexerInfo = (markets: Market[]): Record<string, Indexer> => {
  return markets.reduce((prev, market) => {
    prev[market.contractId] = {
      httpUrl: "",
      wsUrl: "",
    } as Indexer;

    return prev;
  }, {} as Record<string, Indexer>);
};
