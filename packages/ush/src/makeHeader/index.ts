import { getVersion } from "./getVersion";
import { readTemplate } from "./readTemplate";
import { validationJson } from "./validateJson";

export const makeHeader = (): string | undefined => {
  const configJson = readTemplate();
  console.log(configJson);
  const header = validationJson(configJson);
  if (header) {
    const configJsonVersion = getVersion();
    if (header.sameversion && configJsonVersion) {
      header.version = configJsonVersion;
    }
    const userScriptHeader =
      "// ==UserScript==\n// @name         " +
      header.name +
      "\n// @namespace    " +
      header.namespace +
      "\n// @version      " +
      header.version +
      "\n// @description  " +
      header.description +
      "\n// @author       " +
      header.author +
      "\n// @match        " +
      header.match +
      "\n// @grant        " +
      header.grant +
      "\n// ==/UserScript==\n\n";
    return userScriptHeader;
  }
  console.log("invalidate configure.");
  return undefined;
};
