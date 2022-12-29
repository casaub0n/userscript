import path from "path";
import fs from "fs";

// TODO: Result type
export const readTemplate = () => {
  try {
    const configPath = path.join(process.cwd(), "userscript.json");
    console.log(configPath);
    return JSON.parse(fs.readFileSync(configPath, "utf-8"));
  } catch (err) {
    console.error(err.message);
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};
