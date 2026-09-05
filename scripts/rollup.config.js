import terser from "@rollup/plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

export default {
    input: "src/index.js",
    output: [
        {
            file: "assets/js/min.js",
            sourcemap: !isProduction,
            format: "esm"
        }
    ],
    plugins: [isProduction && terser()]
};
