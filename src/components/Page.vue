<template>
    <div class="external-margin">
        <div class="page-layout col-xs-12">
            <HeaderLayout :items="items" :title="pageTitle" @change="onChange"/>

            <ContentLayout :items="itemsToShow"/>

            <FooterLayout :buttonLabel="viewMoreLabel"/>

        </div>
    </div>
</template>

<script>
    import HeaderLayout from './HeaderLayout'
    import ContentLayout from './ContenLayout'
    import FooterLayout from './FooterLayout'
    import favicon from '../asets/images/favicon-code.ico'
    import $ from 'jquery'

    const JSON_FILE_LOCATION = require('../datas.json')

    export default {
        name: "Page",
        data() {
            return{
                items: [],
                pageTitle: '',
                viewMoreLabel: '',
                filteredIds: []
            }
        },
        mounted () {
            $.getJSON(JSON_FILE_LOCATION, (data) => {
                this.items = data.items
                this.pageTitle = data.pageTitle
                this.viewMoreLabel = data.viewMoreLabel
            })
            $("#favicon").attr("href",favicon);
        },
        computed: {
            itemsToShow() {
                if (this.filteredIds.length == 0){
                    return this.items
                }
                return this.items.filter((item) => {
                    return this.filteredIds.includes(item.id)
                })
            }
        },
        methods: {
            onChange(itemsIds) {
                this.filteredIds = itemsIds
            }
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