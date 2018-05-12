<template>
    <div class="page-layout">
        <HeaderLayout :items="items" :title="pageTitle"/>

        <ContentLayout :items="items"/>

        <FooterLayout :buttonLabel="viewMoreLabel"/>

    </div>
</template>

<script>
    import HeaderLayout from './HeaderLayout'
    import ContentLayout from './ContenLayout'
    import FooterLayout from './FooterLayout'
    import {JSON_FILE_LOCATION, readTextFile} from "../libraries/dataParser";

    export default {
        name: "Page",
        data() {
            return{
                items: {},
                pageTitle: '',
                viewMoreLabel: ''
            }
        },
        mounted () {
            readTextFile(JSON_FILE_LOCATION, (text) => {
                const parsedData = JSON.parse(text)
                this.items = parsedData.items
                this.pageTitle = parsedData.pageTitle
                this.viewMoreLabel = parsedData.viewMoreLabel
            })
        },
        components: {FooterLayout, ContentLayout, HeaderLayout}
    }
</script>

<style scoped>
    .page-layout {
        background-color: #2d2c31;
    }
</style>