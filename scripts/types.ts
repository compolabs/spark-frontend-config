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

export interface Links {
  networkUrl: string;
  explorerUrl: string;
  sentioUrl: string;
}

export interface ConfigSpot {
  contractVer: number;
  markets: Market[];
  indexers: Record<string, Indexer>;
  contracts: Contracts;
}

export interface ConfigPerp {
  contractVer: number;
  markets: Market[];
  indexers: Record<string, Indexer>;
  contracts: Contracts;
}

export interface Config {
  version: string;
  isMainnet: boolean;
  tokens: Token[];

  spot: ConfigSpot;
  perp: ConfigPerp;

  links: Links;
}
