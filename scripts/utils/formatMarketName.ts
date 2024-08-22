import tokens from "../data/tokens";

export const formatMarketName = (
  baseAssetId: string,
  quoteAssetId: string
): string => {
  const baseToken = tokens.find((token) => token.assetId === baseAssetId);
  const quoteToken = tokens.find((token) => token.assetId === quoteAssetId);

  if (!baseToken || !quoteToken) {
    throw new Error("One of the asset IDs does not match any token.");
  }

  return `${baseToken.symbol}${quoteToken.symbol}`;
};
