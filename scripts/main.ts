import { Address } from "fuels";
import { generateConfig } from "./utils/generateConfig";

import { input, select } from "@inquirer/prompts";
import { Answers, loadLastAnswer, saveLastAnswer } from "./utils/inquirerUtils";

const validateAddress = (address: string): true | string => {
  try {
    return Address.fromDynamicInput(address) ? true : "Address is invalid!";
  } catch (error) {
    return "Address is invalid!";
  }
};

const askEnvironment = async (previousAnswers?: Answers) => {
  return await select({
    message: "Select the environment:",
    choices: [
      { name: "dev", value: "dev" },
      { name: "prod", value: "prod" },
    ],
    default: previousAnswers?.env,
  });
};

const askAddresses = async (
  sectionName: "perp" | "spot",
  env: string,
  previousAnswers?: Answers
) => {
  console.log(`\n--- Configuring ${sectionName.toUpperCase()} ---`);

  const registryAddress = await input({
    message: `Please enter the address of ${sectionName} registry:`,
    required: true,
    validate: validateAddress,
    default: previousAnswers?.[`${sectionName}Registry`],
  });

  const multiAssetAddress =
    env !== "prod"
      ? await input({
          message: `Please enter the address of ${sectionName} multi asset:`,
          required: true,
          validate: validateAddress,
          default: previousAnswers?.[`${sectionName}MultiAsset`],
        })
      : "";

  return { registryAddress, multiAssetAddress };
};

const main = async () => {
  const previousAnswers = await loadLastAnswer();

  const env = await askEnvironment(previousAnswers);

  const spotConfig = await askAddresses("spot", env, previousAnswers);

  const perpConfig = await askAddresses("perp", env, previousAnswers);

  console.log("\n");
  const indexerId = await input({
    message: "Please enter the id of envio indexer:",
    required: true,
    default: previousAnswers?.indexerId,
  });

  const fullConfiguration = await generateConfig({
    env,
    indexerId,
    spot: spotConfig,
    perp: perpConfig,
  });

  console.log("\nConfiguration:");
  console.log("Environment:", env);
  console.log("Spot Registry Address:", spotConfig.registryAddress);
  if (spotConfig.multiAssetAddress) {
    console.log("Spot MultiAsset Address:", spotConfig.multiAssetAddress);
  }
  console.log("Perp Registry Address:", perpConfig.registryAddress);
  if (perpConfig.multiAssetAddress) {
    console.log("Perp MultiAsset Address:", perpConfig.multiAssetAddress);
  }
  console.log(`\n${JSON.stringify(fullConfiguration, null, 2)}`);

  await saveLastAnswer({
    env,
    indexerId,
    spotRegistry: spotConfig.registryAddress,
    spotMultiAsset: spotConfig.multiAssetAddress,
    perpRegistry: perpConfig.registryAddress,
    perpMultiAsset: perpConfig.multiAssetAddress,
  });
};

main();
