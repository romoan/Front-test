<template>
    <div class="page-layout">
        <HeaderLayout/>

        <ContentLayout/>

        <FooterLayout/>

    </div>
</template>

<script>
    import HeaderLayout from './HeaderLayout'
    import ContentLayout from './ContenLayout'
    import FooterLayout from './FooterLayout'
    import {parsedData} from "../libraries/dataParser";

    export default {
        name: "Page",
        data() {
            return{
                parsedData: {}
            }
        },
        mounted () {
            this.parsedData = parsedData
        },
        components: {FooterLayout, ContentLayout, HeaderLayout}
    }
</script>

<style scoped>
    .page-layout {
        background-color: #2d2c31;
    }
</style>