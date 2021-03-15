<template>
    <div class="h-3/4" :style="getBackground" v-if="media.id > 0">
        <div class="z-40 pt-48 pl-40 w-auto">
            <p class="text-4xl font-extrabold">{{ category }} now</p>
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
import { Media as Popular } from "../common/popularAnimes.type";
import { Media as Trending } from "../common/trendingAnimes.type";
export default Vue.extend({
    data(): { category: string; media: Popular | Trending } {
        return {
            category: "",
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
        const queryTypes: Array<{ category: string; endpoint: string }> = [
            {
                category: "Popular",
                endpoint: "popular",
            },
            {
                category: "Trending",
                endpoint: "trending",
            },
        ];
        const query = queryTypes[Math.floor(Math.random() * queryTypes.length)];
        this.category = query.category;
        const apiAnswer: Popular | Trending = await (
            await fetch(`/api/v1/${query.endpoint}`)
        ).json();
        this.media = apiAnswer;
    },
});
</script>

<style></style>
