import "dotenv/config";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const siteconfig = require("../content/_data/siteconfig.cjs");

const isProduction = process.env.NODE_ENV === "production";

export default {
    input: "src/index.js",
    treeshake: false,
    output: [
        {
            file: "assets/js/min.js",
            sourcemap: !isProduction,
            format: "esm"
        }
    ],
    plugins: [
        // Minify JS in production mode
        isProduction && terser(),
        // Replace env variables for Algolia, if enabled
        siteconfig.algoliaSearch &&
            siteconfig.algoliaSearch.enabled &&
            replace({
                "process.env.ALGOLIA_INDEX": `${siteconfig.algoliaSearch.siteId}`,
                "process.env.ALGOLIA_APP_ID": siteconfig.algoliaSearch.appId,
                "process.env.ALGOLIA_SEARCH_API_KEY":
                    siteconfig.algoliaSearch.searchApiKey,
                preventAssignment: true
            })
    ]
};
