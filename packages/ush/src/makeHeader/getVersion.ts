import path from "path";
import fs from "fs";

export const getVersion = () => {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const isVersion = (version: any): version is string =>
    version.type === "string" && version !== undefined;
  const version = packageJson.version;
  console.log(`version: ${version}`);
  if (isVersion(version)) {
    return version;
  }
  return undefined;
};
