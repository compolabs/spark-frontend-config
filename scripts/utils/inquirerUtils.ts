import fs from "fs/promises";

const LAST_ANSWER_FILE = "./last-answers.json";

interface Answers {
  env: string;
  registry: string;
  indexerId: string;
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
