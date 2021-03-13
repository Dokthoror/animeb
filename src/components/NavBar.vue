<template>
    <div>
        <nav class="nav" :class="{ scrolled: scrolled }">
            <section>
                <router-link to="/home" class="title">
                    <a>
                        AnimeB
                    </a>
                </router-link>
            </section>
            <section>
                <input type="text" placeholder="Search" class="search-box" />
            </section>
        </nav>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            scrolled: true,
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
};
</script>

<style scoped>
.nav {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    align-items: center;
    background-color: rgb(27, 27, 27);
    padding: 10px;
}
.title {
    margin-left: 10px;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 64px;
    font-weight: bold;
    text-align: left;
    text-decoration: none;
}
.search-box {
    margin-right: 20px;
    font-size: 24px;
    border: none;
    outline: none;
    background: none;
    color: #aaa;
}
.search-box:focus {
    animation: input-on-focus 0.25s;
    border-bottom: solid 2px #0093ad;
}
@keyframes input-on-focus {
    from {
        border-bottom: 2px solid transparent;
    }
    to {
        border-bottom: 2px solid #0093ad;
    }
}
</style>
