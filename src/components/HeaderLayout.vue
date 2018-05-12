<template>
    <div>
        <h1>
            {{ title }}
        </h1>
    </div>
    
</template>

<script>
    export default {
        name: "HeaderLayout",
        props: {
            items: {
                type: Object,
                default: {}
            },
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: white;
    }
</style>