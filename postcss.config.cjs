const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    plugins: {
        autoprefixer: {},
        ...(isProduction ? { cssnano: { preset: "default" } } : {})
    }
};
