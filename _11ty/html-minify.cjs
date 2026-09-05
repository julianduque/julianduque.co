// Transformer to minify HTML output.

const { minify } = require("html-minifier-terser");

const convert = async (rawContent, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
        return minify(rawContent, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
        });
    }

    return rawContent;
};

module.exports = {
    initArguments: {},
    configFunction: async (eleventyConfig = {}) => {
        eleventyConfig.addTransform("minifyHTML", convert);
    }
};
