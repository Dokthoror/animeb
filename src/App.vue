<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view class="router-view"></router-view>
    </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
export default {
    components: { NavBar },
};
</script>

<style scoped>
.router-view {
    margin-top: 100px;
}
</style>
