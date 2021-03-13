import Router from "vue-router";

const Home = () => import("./home/Home.vue");

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            component: Home,
        },
    ],
});
