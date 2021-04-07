<template>
    <div class="flex items-center justify-between py-8 bg-gray-900 h-3/4 px-28">
        <div class="h-full w-3/5 flex flex-col items-center justify-center pr-6">
            <p class="text-white text-3xl font-semibold">{{ enTitle }}'s trailer</p>
            <div class="h-full w-full flex justify-center">
                <iframe class="h-full w-full" :src="getTrailerVideo" frameborder="0"></iframe>
            </div>
        </div>
        <div class="flex flex-col items-center w-2/5">
            <p class="text-white text-3xl font-semibold w-full">More infos:</p>
            <br />
            <div class="flex w-full">
                <div class="text-white font-semibold text-xl">Tags:</div>
                <div>
                    <a
                        type="button"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded m-1"
                        :href="`/tag/${tag.id}`"
                        v-for="tag in tags"
                        :key="tag.id"
                        >{{ tag.name }}
                    </a>
                </div>
            </div>
            <br />
            <div class="flex w-full">
                <div class="text-white font-semibold text-xl">Studios:</div>
                <div class="flex flex-col">
                    <p class="text-white font-semibold m-1" v-for="studio in studios" :key="studio.node.name">{{ studio.node.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    props: {
        site: {
            type: String,
            required: false,
        },
        id: {
            type: String,
            required: false,
        },
        enTitle: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
            required: true,
        },
        studios: {
            type: Array,
            required: true,
        },
    },
    computed: {
        getTrailerVideo() {
            if (this.site == "youtube") {
                return `https://www.youtube.com/embed/${this.id}?cc_load_policy=1&cc_lang_pref=eng`;
            } else if (this.site == "dailymotion") {
                return `https://www.dailymotion.com/embed/video/${this.id}`;
            }
        },
    },
});
</script>

<style></style>
