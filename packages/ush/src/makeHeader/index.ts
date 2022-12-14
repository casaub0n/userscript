import { DoSomethingError, Failure, Result, Success } from "../utils/Result";
import { getVersion } from "./getVersion";
import { readTemplate } from "./readTemplate";

export const makeHeader = (): Result<string, DoSomethingError> => {
  const configJson = readTemplate();
  if (configJson.isFailure()) return new Failure(new DoSomethingError());
  const header = configJson.value;
  const packageJsonVersion = getVersion();
  const userScriptHeader = `// ==UserScript==\n
// @name         ${header.name}\n
// @namespace    ${header.namespace}\n
// @version      ${
    packageJsonVersion.isFailure()
      ? header.description
      : packageJsonVersion.value
  }\n
// @description  ${header.description}\n
// @author       ${header.author}\n
// @match        ${header.match}\n
// @grant        ${header.grant}\n
// ==/UserScript==\n\n`;
  return new Success(userScriptHeader);
};
