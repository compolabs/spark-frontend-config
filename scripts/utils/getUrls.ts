import { Links } from "../types";
import { Args } from "./getArgs";

const SENTIO_URL =
  "https://app.sentio.xyz/api/v1/analytics/zhpv96/spark-processor/sql/execute";

export const getUrls = (args: Args): Links => {
  if (args.isMainnet) {
    return {
      networkUrl: "https://mainnet.fuel.network/v1/graphql",
      explorerUrl: "https://app.fuel.network",
      sentioUrl: SENTIO_URL,
    };
  }

  return {
    networkUrl: "https://testnet.fuel.network/v1/graphql",
    explorerUrl: "https://app-testnet.fuel.network",
    sentioUrl: SENTIO_URL,
  };
};
