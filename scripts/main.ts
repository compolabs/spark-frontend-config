import { Address } from "fuels";
import { generateConfig } from "./utils/generateConfig";

import { input, select } from "@inquirer/prompts";

const main = async () => {
  const env = await select({
    message: "Select the environment:",
    choices: [
      {
        name: "dev",
        value: "dev",
      },
      {
        name: "prod",
        value: "prod",
      },
    ],
  });

  const registryAddress = await input({
    message: "Please enter the address of registry:",
    required: true,
    validate: (address) => {
      try {
        return Address.fromDynamicInput(address) ? true : "Address is invalid!";
      } catch (error) {
        return "Address is invalid!";
      }
    },
  });

  let multiAssetAddress = "";

  if (env !== "prod") {
    multiAssetAddress = await input({
      message: "Please enter the address of multi asset:",
      required: true,
      validate: (address) => {
        try {
          return Address.fromDynamicInput(address)
            ? true
            : "Address is invalid!";
        } catch (error) {
          return "Address is invalid!";
        }
      },
    });
  }

  const fullConfiguration = await generateConfig({
    env,
    registryAddress,
    multiAssetAddress,
  });

  console.log("\nConfiguration:");
  console.log("Environment:", env);
  console.log("Registry Address:", registryAddress);
  if (multiAssetAddress) {
    console.log("MultiAsset Address:", multiAssetAddress);
  }
  console.log(`\n${JSON.stringify(fullConfiguration, null, 2)}`);
};

main();
