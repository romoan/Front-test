<template>
    <div>
        <h1>
            CONTENT
        </h1>
        <h2>
            {{data.pageTitle}}
        </h2>
    </div>
    
</template>

<script>
    import {parsedData} from "../libraries/dataParser";

    export default {
        name: "ContentLayout",
        data() {
            return {
                data: {}
            }
        },
        mounted() {
            this.$nextTick(() => {
              this.data = parsedData
            })
        }
    }
</script>

<style scoped>

</style>