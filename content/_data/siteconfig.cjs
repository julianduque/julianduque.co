require("dotenv").config();

module.exports = {
    // Website title, shown in left sidebar and in page title
    title: "Julián Duque",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "http://localhost:8080",
    // Profile image for left sidebar
    image: "/assets/images/headshot.jpg",
    // Image alt text for left sidebar
    imageAlt: "Software Development and Education",
    // Author name, shown in left sidebar, and used in JSON-LD
    author: "Julián Duque",
    // Site description, shown below site image (optional)
    description: "Developer Relations, Education, and Community",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/assets/images/opengraph.png",
    // GitHub ID (optional, remove it not needed), used for link in the left sidebar
    socialGitHub: "julianduque",
    // LinkedIn ID  (optional, remove it not needed), used for link in the left sidebar
    socialLinkedIn: "juliandavidduque",
    // X ID  (optional, remove it not needed), used for link in the left sidebar, and for OpenGraph sharing information
    socialX: "julian_duque",
    // YouTube ID/Channel  (optional, remove it not needed), used for link in the left sidebar
    socialYouTube: "JulianDavidDuque",
    // Google Analytics ID  (optional, remove it not needed), used for... well, Google Analytics
    googleAnalytics: "G-ZESQYNPRR9",
    // Bluesky
    socialBluesky: "https://bsky.app/profile/julianduque.co",
    // Algolia-powered search  (optional, remove it not needed),
    algoliaSearch: {
        // When enabled shows the search bar in the UI
        enabled: true,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        appId: process.env.ALGOLIA_APP_ID,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        searchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        // You'll have to set this manually in your build settings.
        // The value comes from Algolia, and is either visible in the
        // UI for the Crawler Plugin or the Algolia Dashboard.
        siteId: "julianduque",
        // Assuming that you deploy your "main" branch. Otherwise you
        // can either override or configure this (using process.env.HEAD)
        branch: "main"
    }
};
