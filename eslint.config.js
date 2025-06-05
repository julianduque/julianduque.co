import js from "@eslint/js";
import inclusiveLanguage from "eslint-plugin-inclusive-language";

export default [
    js.configs.recommended,
    {
        name: "julianduque.co/base",
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                // Browser globals
                window: "readonly",
                document: "readonly",
                console: "readonly",
                navigator: "readonly",
                location: "readonly",
                fetch: "readonly",
                setTimeout: "readonly",
                clearTimeout: "readonly",

                // Node.js globals
                process: "readonly",
                global: "readonly",
                Buffer: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                module: "readonly",
                require: "readonly",
                exports: "readonly"
            }
        },
        plugins: {
            "inclusive-language": inclusiveLanguage
        },
        rules: {
            "inclusive-language/use-inclusive-words": "error"
        }
    },
    {
        name: "julianduque.co/ignores",
        ignores: [
            "_site/**",
            "assets/js/**",
            "node_modules/**",
            "dist/**",
            "build/**"
        ]
    }
];
