<template>
    <div class="py-4 px-4 bg-gray-900 min-h-1/2 lg:flex lg:items-center lg:justify-between lg:px-28 lg:py-8">
        <div class="w-full lg:w-1/2 lg:h-3/4 lg:flex lg:flex-col lg:items-center lg:pr-6">
            <p class="text-white text-3xl font-semibold">{{ enTitle ? enTitle : naTitle }}'s trailer</p>
            <br />
            <div class="h-full w-full flex justify-center">
                <iframe class="w-full h-52 lg:h-96" :src="getTrailerVideo" frameborder="0" v-if="site && id"></iframe>
                <div class="w-full flex justify-center items-center h-52 bg-gray-700 lg:h-96" v-else>
                    <p class="text-4xl text-white font-semibold">No trailer available</p>
                </div>
            </div>
            <br />
            <div class="w-full flex items-center">
                <div class="text-white font-semibold text-xl">Average score:</div>
                <div
                    class="m-4 rounded-full text-white w-16 h-16 flex items-center justify-center font-black"
                    :class="{ green: averageScore >= 75, orange: averageScore >= 50 && averageScore < 75, red: averageScore < 50 }"
                >
                    {{ averageScore }}
                </div>
            </div>
        </div>
        <br />
        <div class="lg:flex lg:flex-col lg:items-center lg:w-1/2">
            <p class="text-white text-3xl font-semibold w-full">More infos:</p>
            <br />
            <div class="flex w-full">
                <div class="text-white font-semibold text-xl">Tags:</div>
                <div>
                    <router-link
                        type="button"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded m-1"
                        :to="`/tag/${tag.id}`"
                        v-for="tag in tags"
                        :key="tag.id"
                    >
                        {{ tag.name }}
                    </router-link>
                </div>
            </div>
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
            required: false,
        },
        naTitle: {
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
        averageScore: {
            type: Number,
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

<style scoped>
.green {
    border: 5px solid green;
}

.orange {
    border: 5px solid orange;
}

.red {
    border: 5px solid red;
}
</style>
