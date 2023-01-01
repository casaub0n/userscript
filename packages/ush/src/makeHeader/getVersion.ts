import path from "path";
import fs from "fs";
import { DoSomethingError, Failure, Result, Success } from "../utils/Result";

export const getVersion = (): Result<string, DoSomethingError> => {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const version = packageJson.version;

  if (version === "string" && version !== undefined) {
    return new Success(version);
  }

  return new Failure(new DoSomethingError());
};
