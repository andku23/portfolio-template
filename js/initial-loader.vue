<template>
    <div class = "fill-container initial-loader">
        <div class="background"/>
        <div class = "loading-center">
            <transition name = "fade">
                <div class = "loading-text" v-if = "this.textVisible">
                    <div class = "text">{{this.loadingText[this.textIndex]}}</div>
                </div>
            </transition>
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
                textIndex: 0,
                textVisible: true
            }
        },
        mounted() {
            setTimeout(() => {
                this.runLoadingText();
            }, this.textInterval);
        },
        methods: {
            runLoadingText(){
                this.textVisible = false;
                setTimeout(() => {
                    this.incrementLoadingText();
                    this.textVisible = true;
                    setTimeout(() => {
                        this.runLoadingText();
                    }, this.textInterval);
                }, 3000);
            },
            incrementLoadingText(){
                this.textIndex++;
                this.textIndex = ((this.textIndex >= this.loadingText.length) ? 0 : this.textIndex);
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