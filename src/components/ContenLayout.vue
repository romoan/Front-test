<template>
    <div>
        <h1>
            CONTENT
        </h1>
    </div>
    
</template>

<script>
    import {parsedData, parsedData2} from "../libraries/dataParser";

    export default {
        name: "ContentLayout",
        props: {
            items: {
                type: Object,
                default: {}
            }
        }
    }
</script>

<style scoped>

</style>