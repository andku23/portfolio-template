<template>
    <div class = "fill-container">
        <div class = "background"/>
        <ItemDisplay/>
        <ProjectCarousel/>
        <ProjectCarousel/>
        <ProjectCarousel/>
    </div>

</template>

<script>
    import ItemDisplay from "./item-display";
    import ProjectCarousel from "./project-carousel";

    export default {
        name: "home.vue",
        components: {ItemDisplay, ProjectCarousel}
    }
</script>

<style scoped lang="scss">
    @import "../sass/global";

    .fill-container{
        @extend %absolute-fill;
        width: vw(1920);
        height: 100vh;
        .background{
            @extend %absolute-fill;
            background-color:black;
        }
    }


</style>