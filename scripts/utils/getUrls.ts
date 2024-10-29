import { Args } from "./getArgs";

export const getUrls = (
  args: Args
): { networkUrl: string; explorerUrl: string } => {
  if (args.isMainnet) {
    return {
      networkUrl: "https://mainnet.fuel.network/v1/graphql",
      explorerUrl: "https://app.fuel.network",
    };
  }

  return {
    networkUrl: "https://testnet.fuel.network/v1/graphql",
    explorerUrl: "https://app-testnet.fuel.network",
  };
};
