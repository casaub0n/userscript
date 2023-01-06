import { install } from "@github/hotkey";
import { markdownLink } from "./markdownLink";

const href = document.location.href;
const title = document.title;

// Install all the hotkeys on the page
for (const el of document.querySelectorAll<HTMLElement>("[data-hotkey]")) {
  install(el);

  if (el.matches(".frobber")) {
    el.addEventListener("hotkey-fire", (event) => {
      event.preventDefault;
      navigator.clipboard.writeText(markdownLink(title, href));
    });
  }
}
