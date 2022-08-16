import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import laravel from "vite-plugin-laravel";
import vue from "@vitejs/plugin-vue";
import inertia from "./resources/scripts/vite/inertia-layout";
import path from "path";

export default defineConfig({
    plugins: [inertia(), vue(), laravel({})],
    resolve: {
        alias: {
            "@": path.resolve("./resources"),
            ziggy: "/vendor/tightenco/ziggy/src/js",
            "ziggy-vue": "/vendor/tightenco/ziggy/src/js/vue",
        },
    },
    ssr: {
        noExternal: ["@inertiajs/server"],
    },
    build: {
        emptyOutDir: false,
    },
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: ['@import "resources/sass/app.scss"', ""],
            },
        },
    },
});
