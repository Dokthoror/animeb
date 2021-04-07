<template>
    <div class="h-screen" :style="getBackground">
        <div class="h-full flex items-center pl-24 pr-24">
            <img class="min-h-1/2 max-h-3/4 mr-4 shadow-2xl" :src="coverImage" alt="enTitle" />
            <div class="flex flex-col">
                <p class="text-5xl font-bold">{{ enTitle }}</p>
                <p class="text-5xl italic font-bold">{{ naTitle }}</p>
                <p class="text-3xl" v-if="episodes > 0">
                    Number of episodes: <span class="font-bold">{{ episodes }}</span>
                </p>
                <br />
                <p class="text-2xl" v-html="desc"></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: {
        enTitle: {
            type: String,
            required: true,
        },
        naTitle: {
            type: String,
            required: true,
        },
        coverImage: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: false,
        },
        episodes: {
            type: Number,
            required: false,
        },
        desc: {
            type: String,
            required: true,
        },
        bannerImage: {
            type: String,
            required: false,
        },
    },
    computed: {
        getBackground(): string {
            const color: string = `${this.color || "#ffffff"}AA`;
            return `background: linear-gradient(${color}, ${color}), url(${this.bannerImage}) no-repeat center/cover`;
        },
    },
});
</script>

<style></style>
