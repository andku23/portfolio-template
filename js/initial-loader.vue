<template>
    <div class = "fill-container initial-loader">
        <div class="background"/>
        welcome
    </div>
</template>

<script>
    export default {
        name: "InitialLoader"
    }
</script>

<style scoped lang="scss">
    @import "../sass/global";
    .initial-loader{
        .background{
            @extend %absolute-fill;
            background-color:black;
        }
    }
</style>