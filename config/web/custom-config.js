// Application logo url
config.defaultLogoUrl = "images/logo.svg";

config.giphy = {
  // Whether the feature is enabled or not.
  enabled: true,
  // SDK API Key from Giphy.
  sdkKey: "bTF2PE0SPnNOryK9zyjURRRbjDe0Ogh5",
  // Display mode can be one of:
  // - tile: show the GIF on the tile of the participant that sent it.
  // - chat: show the GIF as a message in chat
  // - all: all of the above. This is the default option
  displayMode: "all",
  // How long the GIF should be displayed on the tile (in milliseconds).
  tileTime: 5000,
};

config.analytics = {
  // True if the analytics should be disabled
  disabled: false,

  // The Google Analytics Tracking ID:
  googleAnalyticsTrackingId: "UA-128173590-3",

  // The Amplitude APP Key:
  amplitudeAPPKey: "c80ad8a2ac9f858fb1b9480aa4006f46",

  // Array of script URLs to load as lib-jitsi-meet "analytics handlers".
  scriptURLs: [
    "libs/analytics-ga.js",
    //      "libs/analytics-ga.min.js", // google-analytics
    //      "https://example.com/my-custom-analytics.js",
  ],
};
