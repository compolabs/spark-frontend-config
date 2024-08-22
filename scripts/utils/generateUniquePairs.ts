import { Token } from "../types";

export const generateUniquePairs = (tokens: Token[]): [Token, Token][] => {
  const pairs: [Token, Token][] = [];

  for (let i = 0; i < tokens.length; i++) {
    for (let j = i + 1; j < tokens.length; j++) {
      pairs.push([tokens[i], tokens[j]]);
    }
  }

  return pairs;
};
