import fs from "fs/promises";

const LAST_ANSWER_FILE = "./last-answers.json";

export interface Answers {
  env: string;
  indexerId: string;

  spotRegistry: string;
  spotMultiAsset: string;

  perpRegistry: string;
  perpMultiAsset: string;
}

export const loadLastAnswer = async (): Promise<Answers | undefined> => {
  try {
    const data = await fs.readFile(LAST_ANSWER_FILE, "utf-8");
    return JSON.parse(data) as Answers;
  } catch (error) {
    return undefined;
  }
};

export const saveLastAnswer = async (data: Answers) => {
  await fs.writeFile(LAST_ANSWER_FILE, JSON.stringify(data, null, 2));
};
