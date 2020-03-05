<template>
    <div class = "fill-container">
        <transition name = "fade">
            <InitialLoader />
        </transition>
    </div>
</template>

<script>
    import InitialLoader from './initial-loader.vue'

    export default {
        name: "landing.vue",
        components: {InitialLoader}
    }
</script>

<style scoped lang="scss">
    @import "../sass/global";

    .fill-container{
        @extend %absolute-fill;
    }
</style>