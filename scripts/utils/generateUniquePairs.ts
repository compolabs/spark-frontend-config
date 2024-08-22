import { Token } from "../types";

export const generateUniquePairs = (tokens: Token[]): [string, string][] => {
  const pairs: [string, string][] = [];

  for (let i = 0; i < tokens.length; i++) {
    for (let j = i + 1; j < tokens.length; j++) {
      pairs.push([tokens[i].assetId, tokens[j].assetId]);
    }
  }

  return pairs;
};
