import Router from "vue-router";

const Home = () => import("./home/Home.vue");
const Anime = () => import("./anime/Anime.vue");

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
        {
            path: "/anime/:id",
            component: Anime,
        },
    ],
});
