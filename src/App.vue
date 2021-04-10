<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view class="h-screen"></router-view>
    </div>
</template>

<script lang="ts">
import "./common/style.css";
import Vue from "vue";
import NavBar from "./components/NavBar.vue";
export default Vue.extend({
    components: { NavBar },
});
</script>

<style></style>
