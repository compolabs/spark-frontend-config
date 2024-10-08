import { Token } from "../types";

const data: Token[] = [
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
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 8,
    assetId:
      "0x38e4ca985b22625fff93205e997bfc5cc8453a953da638ad297ca60a9f2600bc",
    priceFeed:
      "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
    precision: 8,
  },
  {
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    assetId:
      "0x336b7c06352a4b736ff6f688ba6885788b3df16e136e95310ade51aa32dc6f05",
    priceFeed:
      "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
    precision: 2,
  },
];

export default data;
