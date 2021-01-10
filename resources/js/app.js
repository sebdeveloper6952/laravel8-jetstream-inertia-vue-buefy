require("./bootstrap");

// Import modules...
import Vue from "vue";
import {
    App as InertiaApp,
    plugin as InertiaPlugin
} from "@inertiajs/inertia-vue";
import PortalVue from "portal-vue";
import { InertiaProgress } from "@inertiajs/progress";
import AppLayout from "./Layouts/AppLayout.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

InertiaProgress.init();
Vue.mixin({ methods: { route } });
Vue.use(InertiaPlugin);
Vue.use(PortalVue);
Vue.use(Buefy);

Vue.component("app-layout", AppLayout);

const app = document.getElementById("app");

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name => require(`./Pages/${name}`).default
            }
        })
}).$mount(app);
