<template>
    <div>
        <div v-if="media.title.native">
            <anime-desc
                v-if="media.title.native"
                :enTitle="media.title.english"
                :naTitle="media.title.native"
                :coverImage="media.coverImage.extraLarge"
                :color="media.coverImage.color"
                :episodes="media.episodes"
                :desc="media.description"
                :bannerImage="media.bannerImage"
            ></anime-desc>
            <anime-trailer
                v-bind="media.trailer"
                :enTitle="media.title.english"
                :naTitle="media.title.native"
                :tags="media.tags"
                :studios="media.studios.edges"
                :averageScore="media.averageScore"
            ></anime-trailer>
        </div>
        <div v-else class="h-full flex justify-center items-center">
            <loader></loader>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
import Loader from "../../components/Loader.vue";
import AnimeDesc from "../../components/Anime/AnimeDesc.vue";
import AnimeTrailer from "../../components/Anime/AnimeTrailer.vue";
import { Media } from "../../common/anime.type";
Vue.use(VueRouter);
export default Vue.extend({
    components: { AnimeDesc, AnimeTrailer, Loader },
    data(): { media: Media } {
        return {
            media: {
                title: {
                    english: "",
                    native: "",
                },
                description: "",
                episodes: 0,
                trailer: {
                    site: "",
                    id: "",
                },
                bannerImage: "",
                coverImage: {
                    extraLarge: "",
                    color: "",
                },
                averageScore: 0,
                tags: [],
                studios: {
                    edges: [],
                },
            },
        };
    },
    async beforeMount() {
        const apiAnswer: Media = await (await fetch(`/api/v1/anime/${this.$route.params.id}`)).json();
        this.media = apiAnswer;
        document.title = `AnimeB - ${this.media.title.english}`;
    },
});
</script>

<style></style>
