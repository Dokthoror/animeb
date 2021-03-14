<template>
    <div class="h-3/4" :style="getBackground" v-if="media.id > 0">
        <div class="z-40 pt-60 pl-40 w-auto">
            <p class="text-3xl font-bold">{{ media.title.english }}</p>
            <p class="text-3xl italic font-bold">{{ media.title.native }}</p>
            <p class="text-xl w-1/4" v-html="animeDesc"></p>
            <div class="m-1">
                <a
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    :href="`/anime/${media.id}`"
                >
                    More infos
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Media } from "../common/popularAnimes.type";
export default Vue.extend({
    data(): { media: Media } {
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
                description: "",
                episodes: 0,
                bannerImage: "",
            },
        };
    },
    computed: {
        animeDesc(): string {
            const length: number = 300;
            return this.media.description.length >= length
                ? `${this.media.description.substring(0, length - 1)}...`
                : this.media.description;
        },
        getBackground(): string {
            const color: string = this.media.coverImage.color || "#fff";
            return `background: linear-gradient(to right, ${color} 25%, transparent), url(${this.media.bannerImage}) no-repeat center/cover;`;
        },
    },
    async beforeMount() {
        const apiAnswer: Media = await (await fetch("/api/v1/popular")).json();
        this.media.title = apiAnswer.title;
        this.media.coverImage = apiAnswer.coverImage;
        this.media.description = apiAnswer.description;
        this.media.episodes = apiAnswer.episodes;
        this.media.bannerImage = apiAnswer.bannerImage;
        this.media.id = apiAnswer.id;
    },
});
</script>

<style></style>
