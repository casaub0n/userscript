export const redirectTwitterLocation = (): void => {
  if (document.location.hostname === "mobild.twitter.com") {
    window.location.hostname = "twitter.com";
  }
};
