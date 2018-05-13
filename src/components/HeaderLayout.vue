<template>
    <div class="header-layout">
        <h1>
            {{ title }}
        </h1>
        <LettersLayoutFilter
            :items="items"
            :onChange="onChange"
            :value="value"
        />
    </div>
    
</template>

<script>
    import LettersLayoutFilter from './LettersLayoutFilter'
    export default {
        name: "HeaderLayout",
        props: {
            items: {
                type: Array,
                default: {}
            },
            title: {
                type: String,
                default: ''
            },
            filteredIds: {
                type: Array
            }
        },
        data() {
            return {
                value: '',
            }
        },
        methods: {
            onChange(value, itemsIds){
                this.value = value
                this.$emit('change', itemsIds)
            }
        },
        components: {LettersLayoutFilter}
    }
</script>

<style scoped>
    .header-layout {
        padding: 0% 0.5%;
    }
    h1 {
        color: white;
        text-transform: uppercase;
    }
</style>