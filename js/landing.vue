<template>
    <div class = "fill-container">
        <transition name = "fade">
            <InitialLoader v-if = "this.initialLoaderEnabled" />
        </transition>
    </div>
</template>

<script>
    import InitialLoader from './initial-loader.vue'

    export default {
        name: "landing.vue",
        components: {InitialLoader},
        data: function() {
            return {
                initialLoaderEnabled: false
            }
        },
        mounted() {
            this.initialLoaderEnabled = true;
            setTimeout(() => {
                this.$router.push({ path: 'home' });
            }, 3000)
        }
    }
</script>

<style scoped lang="scss">
    @import "../sass/global";

    .fill-container{
        @extend %absolute-fill;
    }
</style>