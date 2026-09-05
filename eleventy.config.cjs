const { format, formatISO, getYear } = require("date-fns");
const { rssPlugin } = require("@11ty/eleventy-plugin-rss");
const { createHash } = require("crypto");
const { URL } = require("url");
const { readFileSync } = require("fs");
const siteconfig = require("./content/_data/siteconfig.cjs");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
    // Set Markdown library
    eleventyConfig.setLibrary(
        "md",
        markdownIt({
            html: true,
            xhtmlOut: true,
            linkify: true,
            typographer: true
        }).use(markdownItAnchor)
    );

    // Define passthrough for assets and self-hosted fonts
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy({
        "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2":
            "assets/fonts/ibm-plex-mono-latin-400-normal.woff2",
        "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-italic.woff2":
            "assets/fonts/ibm-plex-mono-latin-400-italic.woff2",
        "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2":
            "assets/fonts/ibm-plex-mono-latin-500-normal.woff2"
    });

    // Add watch target for JS files (needed for JS bundling in dev mode)
    eleventyConfig.addWatchTarget("./assets/js/");
    // And to make this work we've to disable the .gitignore usage of eleventy.
    eleventyConfig.setUseGitIgnore(false);

    // Build year for the footer
    eleventyConfig.addGlobalData("buildYear", () => getYear(new Date()));

    // Add 3rd party plugins
    eleventyConfig.addPlugin(rssPlugin);

    // Define 11ty template formats
    eleventyConfig.setTemplateFormats([
        "njk",
        "md",
        "svg",
        "jpg",
        "css",
        "png"
    ]);

    // Generate excerpt from first paragraph
    eleventyConfig.addShortcode("excerpt", (article) =>
        extractExcerpt(article)
    );

    // Set absolute url
    eleventyConfig.addNunjucksFilter("absoluteUrl", (path) => {
        return new URL(path, siteconfig.url).toString();
    });

    eleventyConfig.addNunjucksFilter("youtubeThumbnail", function (videoUrl) {
        if (!videoUrl) {
            return null;
        }

        try {
            const parsedUrl = new URL(videoUrl);
            const host = parsedUrl.hostname.replace(/^www\./, "");
            let videoId = null;

            if (host === "youtu.be") {
                const segments = parsedUrl.pathname.split("/").filter(Boolean);
                if (segments.length > 0) {
                    [videoId] = segments;
                }
            } else if (host.endsWith("youtube.com")) {
                if (parsedUrl.searchParams.has("v")) {
                    videoId = parsedUrl.searchParams.get("v");
                } else {
                    const segments = parsedUrl.pathname.split("/").filter(Boolean);
                    if (segments.length >= 2 && ["embed", "shorts", "live"].includes(segments[0])) {
                        videoId = segments[1];
                    } else if (segments.length === 1 && segments[0] !== "watch") {
                        [videoId] = segments;
                    }
                }
            }

            if (!videoId) {
                return null;
            }

            const sanitizedId = videoId.replace(/[^a-zA-Z0-9_-]/g, "");
            if (!sanitizedId) {
                return null;
            }

            return `https://i.ytimg.com/vi/${sanitizedId}/hqdefault.jpg`;
        } catch (_error) {
            return null;
        }
    });

    // Extract reading time
    eleventyConfig.addNunjucksFilter("readingTime", (wordcount) => {
        let readingTime = Math.ceil(wordcount / 220);
        if (readingTime === 1) {
            return readingTime + " minute";
        }
        return readingTime + " minutes";
    });

    // Extract word count
    eleventyConfig.addNunjucksFilter("formatWords", (wordcount) => {
        return wordcount.toLocaleString("en");
    });

    // Returns "page" when the nav destination matches the current URL
    eleventyConfig.addNunjucksFilter("navCurrent", function (url, pattern) {
        if (pattern === "/") {
            return url === "/" ? "page" : "";
        }
        return url.startsWith(pattern) ? "page" : "";
    });

    // Year of a date, for footers and archive groupings
    eleventyConfig.addNunjucksFilter("yearOf", function (date) {
        return getYear(date);
    });

    // Format dates for sitemap
    eleventyConfig.addNunjucksFilter("sitemapdate", function (date) {
        return format(date, "yyyy-MM-dd");
    });

    // Format dates for JSON-LD
    eleventyConfig.addNunjucksFilter("isodate", function (date) {
        return formatISO(date);
    });

    // Extracts the year from a post
    eleventyConfig.addNunjucksFilter("year", function (post) {
        if (post && post.date) {
            return getYear(post.date);
        }
        return "n/a";
    });

    // Extracts the day of a date
    eleventyConfig.addNunjucksFilter("day", function (date) {
        return format(date, "dd");
    });

    // Extracts the month of a date
    eleventyConfig.addNunjucksFilter("month", function (date) {
        return format(date, "MMM");
    });

    // Extracts readable date of a date
    eleventyConfig.addNunjucksFilter("readableDate", function (date) {
        return format(date, "MMM dd, yyyy");
    });

    // Add custom hash for cache busting
    const hashes = new Map();
    eleventyConfig.addNunjucksFilter("addHash", function (absolutePath) {
        const cached = hashes.get(absolutePath);
        if (cached) {
            return `${absolutePath}?hash=${cached}`;
        }
        const fileContent = readFileSync(`${process.cwd()}${absolutePath}`, {
            encoding: "utf-8"
        }).toString();
        const hash = createHash("md5").update(fileContent).digest("hex");
        hashes.set(absolutePath, hash);
        return `${absolutePath}?hash=${hash}`;
    });

    // Plugin for setting _blank and rel=noopener on external links in markdown content
    eleventyConfig.addPlugin(require("./_11ty/external-links.cjs"));

    // Plugin for transforming images
    eleventyConfig.addPlugin(require("./_11ty/srcset.cjs"));

    // Plugin for minifying HTML
    eleventyConfig.addPlugin(require("./_11ty/html-minify.cjs"));

    return {
        dir: {
            // Consolidating everything below the `content` folder
            input: "content"
        }
    };
};

// Taken from here => https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
function extractExcerpt(article) {
    if (!Object.prototype.hasOwnProperty.call(article, "templateContent")) {
        console.warn(
            'Failed to extract excerpt: Document has no property "templateContent".'
        );
        return null;
    }

    const content = article.templateContent;

    const excerpt = content.slice(0, content.indexOf("\n"));

    return excerpt;
}
