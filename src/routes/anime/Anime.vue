<template>
    <div class="h-screen" :style="getBackground"></div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import { Media as Anime } from "../../common/popularAnimes.type";
export default Vue.extend({
    data(): { media: Anime } {
        return {
            media: {
                title: {
                    english: "",
                    native: "",
                },
                coverImage: {
                    extraLarge: "",
                    color: "",
                },
                id: 0,
                bannerImage: "",
                description: "",
                episodes: 0,
            },
        };
    },
    computed: {
        getBackground(): string {
            const color: string = `${this.media.coverImage.color ||
                "#ffffff"}AA`;
            return `background: linear-gradient(${color}, ${color}), url(${this.media.bannerImage}) no-repeat center/cover`;
        },
    },
    async beforeMount() {
        const apiAnswer: Anime = await (
            await fetch(`/api/v1/anime/${this.$route.params.id}`)
        ).json();
        this.media = apiAnswer;
    },
});
</script>

<style></style>
