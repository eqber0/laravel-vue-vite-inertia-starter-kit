import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { resolvePageComponent } from "vite-plugin-laravel/inertia";
import { InertiaProgress } from "@inertiajs/progress";
import { ZiggyVue } from "ziggy-js/src/js/vue.js";
import { Ziggy } from "../js/ziggy.js";
import Icon from "@/views/components/Icon.vue";
import VueLazyload from "vue3-lazyload";

InertiaProgress.init({
    delay: 450,
    color: "#29d",
    includeCSS: true,
    showSpinner: true,
});

const lazyloadOptions = {
    // preLoad: 1.3,
    // error: errorimage,
    // loading: loadimage,
    // attempt: 1,
};

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(name, import.meta.glob("../views/pages/**/*.vue")),
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(VueLazyload, lazyloadOptions)
            .component("Link", Link)
            .component("Head", Head)
            .component("Icon", Icon)
            .mount(el);
    },
});
