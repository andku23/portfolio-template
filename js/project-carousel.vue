<template>
    <div class = "project-carousel">
        <div class = "background"></div>
    </div>
</template>

<script>
    export default {
        name: "ProjectCarousel"
    }
</script>

<style scoped lang="scss">
    @import "../sass/global";
    .project-carousel{
        position:relative;
        width: vw(1920);
        height: vw(300);
        margin-top: vw(80);

        .background{
            @extend %absolute-fill;
            background-color: green;
        }
    }
</style>