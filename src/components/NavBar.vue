<template>
    <nav
        class="fixed w-screen z-50 flex justify-between items-center bg-gray-900 p-2.5"
        :class="{ scrolled: scrolled }"
    >
        <section>
            <router-link to="/home" class="text-6xl text-gray-50 font-black">
                <a>
                    AnimeB
                </a>
            </router-link>
        </section>
        <section>
            <input
                type="text"
                placeholder="Search"
                class="text-3xl outline-none bg-transparent border-none mr-4 text-gray-300"
            />
        </section>
    </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data() {
        return {
            scrolled: false,
        };
    },
    methods: {
        onScroll() {
            this.scrolled = window.scrollY > 0;
        },
    },
    beforeMount() {
        window.addEventListener("scroll", this.onScroll);
    },
});
</script>

<style></style>
