self.addEventListener("install", () => {
  console.log("Service worker installed");
});

self.addEventListener("fetch", () => {
  // required to make it a PWA
});
