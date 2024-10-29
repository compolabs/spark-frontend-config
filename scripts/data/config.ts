import { Config } from "../types";

import packageJson from "../../package.json";

const data: Config = {
  version: packageJson.version,
  isMainnet: false,
  contractVer: 0,
  tokens: [],
  markets: [],
  indexers: {},
  contracts: {
    registry: "",
    multiAsset: "",
  },
  networkUrl: "",
  explorerUrl: "",
};

export default data;
