import { Token } from "../types";

export const generateUniquePairs = (tokens: Token[]): [Token, Token][] => {
  return tokens.flatMap((tokenA, i) =>
    tokens
      .slice(i + 1)
      .flatMap((tokenB) => [
        [tokenA, tokenB] as [Token, Token],
        [tokenB, tokenA] as [Token, Token],
      ])
  );
};
