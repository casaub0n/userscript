import { getVersion } from "./getVersion";
import { readTemplate } from "./readTemplate";

export const makeHeader = (): string | undefined => {
  const configJson = readTemplate();
  if (configJson.isFailure()) return undefined;
  const header = configJson.value;
  const packageJsonVersion = getVersion();
  if (packageJsonVersion.isFailure()) {
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
  const userScriptHeader =
      "// ==UserScript==\n// @name         " +
      header.name +
      "\n// @namespace    " +
      header.namespace +
      "\n// @version      " +
      packageJsonVersion.value +
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
};
