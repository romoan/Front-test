<template>
    <div class="external-margin">
        <div class="page-layout col-xs-12">
            <HeaderLayout :items="items" :title="pageTitle"/>

            <ContentLayout :items="items"/>

            <FooterLayout :buttonLabel="viewMoreLabel"/>

        </div>
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
                items: [],
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
    .external-margin {
        background-color: #2d2c31;
        max-width: 1579px;
        margin-right: auto;
        margin-left: auto;
    }
    .page-layout {
        max-width: 1362px;
        margin-right: auto;
        margin-left: auto;
        padding: 2% 0.7%;
    }
</style>