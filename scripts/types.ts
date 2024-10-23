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
  version: number;
  contractId: string;
}

export interface Indexer {
  httpUrl: string;
  wsUrl: string;
}

export interface Contracts {
  registry: string;
  multiAsset: string;
}

export interface Config {
  version: string;
  isMainnet: boolean;
  contractVer: number;
  tokens: Token[];
  markets: Market[];
  indexers: Record<string, Indexer>;
  contracts: Contracts;
  networkUrl: string;
  explorerUrl: string;
}
