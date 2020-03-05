<template>
    <div class = "fill-container initial-loader">
        <div class="background"/>
        <div class = "loading-center">
            <div class = "loading-text">
                <div class = "text">{{this.loadingText[this.textIndex]}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InitialLoader",
        data: function(){
            return {
                loadingText: [
                    "Text 1",
                    "Text 2"
                ],
                textInterval: 4000,
                textIndex: 0
            }
        },
        mounted: function() {
        },
        methods: {
            runLoadingText(){
                setTimeout(() => {

                }, this.textInterval);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../sass/global";
    .initial-loader{
        .background{
            @extend %absolute-fill;
            background-color:black;
        }
        .loading-center{
            position:absolute;
            top: 50%;
            width: 100%;
            .loading-text{
                @extend %flex-parent-center;
                top: 10vh;
                .text{
                    position: relative;
                    text-align: center;
                    color: white;
                }
            }
        }
    }
</style>