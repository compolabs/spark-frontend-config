import { Token } from "../types";

const data: Token[] = [
  {
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    assetId:
      "0x286c479da40dc953bddc3bb4c453b608bba2e0ac483b077bd475174115395e6b",
    priceFeed:
      "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
    precision: 2,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 9,
    assetId:
      "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07",
    priceFeed:
      "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
    precision: 9,
  },
  {
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    assetId:
      "0xa0265fb5c32f6e8db3197af3c7eb05c48ae373605b8165b6f4a51c5b0ba4812e",
    priceFeed:
      "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b",
    precision: 2,
  },
];

export default data;
