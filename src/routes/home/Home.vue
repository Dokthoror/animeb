<template>
    <div :v-if="bannerImage">
        <img :src="bannerImage" alt="title.english" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Media } from "../../common/popularAnimes.type";
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
