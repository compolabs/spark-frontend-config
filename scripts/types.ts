export interface Token {
  name: string;
  symbol: string;
  decimals: number;
  precision: number;
  assetId: string;
  priceFeed: string;
}

export interface Market {
  marketName: string;
  owner: string;
  baseAssetId: string;
  baseAssetDecimals: number;
  quoteAssetId: string;
  quoteAssetDecimals: number;
  priceDecimals: number;
  feeAssetId: string;
  contractId: string;
}

export interface Indexer {
  marketContactId: string;
  httpUrl: string;
  wsUrl: string;
}

export interface Contracts {
  orderbook: string;
}

export interface Config {
  tokens: Token[];
  markets: Market[];
  indexers: Indexer[];
  contracts: Contracts;
  networkUrl: string;
}
