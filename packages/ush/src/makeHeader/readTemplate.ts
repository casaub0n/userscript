import path from "path";
import fs from "fs";
import { Failure, Result, Success } from "../utils/Result";
import { z } from "zod";

class DoSomethingError extends Error {}

const UserScript = z.object({
  name: z.string(),
  namespace: z.string(),
  version: z.string(),
  description: z.string(),
  author: z.string(),
  match: z.string(),
  grant: z.string(),
  sameversion: z.string().optional(),
});

type UserScript = z.infer<typeof UserScript>;

export const readTemplate = (): Result<UserScript, DoSomethingError> => {
  const configPath = path.join(process.cwd(), "userscript.json");
  console.log(configPath);
  const userScript = UserScript.parse(
    JSON.parse(fs.readFileSync(configPath, "utf-8"))
  );
  if (userScript) return new Success(userScript);
  return new Failure(new DoSomethingError());
};
