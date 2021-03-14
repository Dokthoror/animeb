<template>
    <div class="h-3/4" :style="getBackground">
        <div class="z-40 pt-60 pl-40 w-auto">
            <p class="text-3xl font-bold">{{ title.english }}</p>
            <p class="text-3xl italic font-bold">{{ title.native }}</p>
            <p class="text-xl w-1/4" v-html="animeDesc"></p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Media } from "../common/popularAnimes.type";
export default Vue.extend({
    data(): Media {
        return {
            title: {
                english: "",
                native: "",
            },
            coverImage: {
                extraLarge: "",
                color: "",
            },
            description: "",
            episodes: 0,
            bannerImage: "",
        };
    },
    computed: {
        animeDesc(): string {
            const length: number = 300;
            return this.description.length >= length
                ? `${this.description.substring(0, length - 1)}...`
                : this.description;
        },
        getBackground(): string {
            return `background: linear-gradient(to right, ${this.coverImage
                .color || "#fff"}, transparent), url(${
                this.bannerImage
            }) no-repeat center/cover;`;
        },
    },
    async beforeMount() {
        const apiAnswer: Media = await (await fetch("/api/v1/popular")).json();
        this.title = apiAnswer.title;
        this.coverImage = apiAnswer.coverImage;
        this.description = apiAnswer.description;
        this.episodes = apiAnswer.episodes;
        this.bannerImage = apiAnswer.bannerImage;
    },
});
</script>

<style></style>
