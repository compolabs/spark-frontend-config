import config from "./data/config";
import { Config } from "./types";
import { getArgs } from "./utils/getArgs";
import { getMarketsInfo } from "./utils/getMarketsInfo";
import { getOrderbookSdk } from "./utils/getOrderbookSdk";
import { getUrls } from "./utils/getUrls";

const main = async () => {
  const args = getArgs("prod");

  const urls = getUrls(args);

  const baseConfig: Config = {
    ...config,
    isMainnet: args.isMainnet,
    indexers: { ...config.indexers },
    contracts: {
      ...config.contracts,
      registry:
        "0xbb91b7f9d31ee562b24e35d756ce20913f9752600582f51008c63b2d3792926b",
      multiAsset: "",
    },
    networkUrl: urls.networkUrl,
    explorerUrl: urls.explorerUrl,
  };

  const sdk = getOrderbookSdk(baseConfig);

  // ezETH-USDC - 0xe4f64c6a9facdce0c055ecade9379c8f425411ec3f9523a472d14ce8a4fbce38,
  // FUEL-ETH - 0x4391b39d9165917faffb9dcc69d19b6952a6ebf02db593747cf2f5d8298d28c7,
  // pzETH-USDC - 0x12f52412e0ef50d4e38e1d03fd80d0a88fbaa7253e47f0cc48ba4e3049bd9ce4,
  // TRUMP-ETH - 0x272bc2c2d065e8ca22f0473e328f403bb1ba2e85d71f5fa51dcb83393714ff01,
  // USDT-USDC - 0xe4e4844f78e2e470b590d0c76ffc9f4422a87317377813a181a02c60a60bc774,
  // WETH-USDC - 0x0bef6eb3018d901818978175feccf650b65dee8e3a8f5b59e138bcf1cf1d0db9

  const markets = await getMarketsInfo(sdk, [
    "0xe4f64c6a9facdce0c055ecade9379c8f425411ec3f9523a472d14ce8a4fbce38",
    "0x4391b39d9165917faffb9dcc69d19b6952a6ebf02db593747cf2f5d8298d28c7",
    "0x12f52412e0ef50d4e38e1d03fd80d0a88fbaa7253e47f0cc48ba4e3049bd9ce4",
    "0x272bc2c2d065e8ca22f0473e328f403bb1ba2e85d71f5fa51dcb83393714ff01",
    "0xe4e4844f78e2e470b590d0c76ffc9f4422a87317377813a181a02c60a60bc774",
    "0x0bef6eb3018d901818978175feccf650b65dee8e3a8f5b59e138bcf1cf1d0db9",
  ]);

  console.log(markets);
};

main();
