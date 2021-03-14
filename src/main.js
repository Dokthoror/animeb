import App from "./App.vue";
import Vue from "vue";
import router from "./routes/clientRouter";
import Router from "vue-router";

Vue.use(Router);

const app = new Vue({
    el: "#app",
    router,
    render: (h) => h(App),
});
