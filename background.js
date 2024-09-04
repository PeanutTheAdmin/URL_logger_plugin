chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Main URL visited: " + details.url);
  },
  { urls: ["*://*/*"] }
);

chrome.webRequest.onCompleted.addListener(
  function(details) {
    console.log("Resource URL loaded: " + details.url);
  },
  { urls: ["*://*/*"] }
);
