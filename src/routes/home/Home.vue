<template>
    <div>
        <popular-anime></popular-anime>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import PopularAnime from "../../components/PopularAnime.vue";
export default Vue.extend({
    components: { PopularAnime },
});
</script>

<style></style>
