require("dotenv").config({ quiet: true });

module.exports = {
    // Website title, shown in the navigation and in page titles
    title: "Julián Duque",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "http://localhost:8080",
    // Profile image for the home page
    image: "/assets/images/headshot.jpg",
    // Image alt text for the profile image
    imageAlt: "AI, Developer Relations, Education, and Community",
    // Author name, used in JSON-LD and the footer
    author: "Julián Duque",
    // Site description (optional)
    description: "AI, Developer Relations, Education, and Community",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/assets/images/opengraph.png",
    // GitHub ID (optional, remove it not needed)
    socialGitHub: "julianduque",
    // LinkedIn ID  (optional, remove it not needed)
    socialLinkedIn: "juliandavidduque",
    // X ID  (optional, remove it not needed), and for OpenGraph sharing information
    socialX: "julian_duque",
    // YouTube ID/Channel  (optional, remove it not needed)
    socialYouTube: "JulianDavidDuque",
    // Google Analytics ID  (optional, remove it not needed), used for... well, Google Analytics
    googleAnalytics: "G-ZESQYNPRR9",
    // Bluesky
    socialBluesky: "https://bsky.app/profile/julianduque.co"
};
