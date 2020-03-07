<template>
    <div class = "item-display">
        <div class = "background"></div>
    </div>
</template>

<script>
    export default {
        name: "ItemDisplay"
    }
</script>

<style scoped lang="scss">
    @import "../sass/global";
    .item-display{
        position:relative;
        width: vw(1920);

        .background{
            @extend %absolute-fill;
            background-color: red;
        }
    }
</style>