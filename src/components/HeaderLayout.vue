<template>
    <div class="header-layout">
        <h1>
            {{ title }}
        </h1>
        <LettersLayoutFilter
            v-show="isDesktopMode"
            :items="items"
            :onChange="onChange"
            :value="value"
        />
        <DropdownLayoutFilter
            v-show="!isDesktopMode"
            :items="items"
            :onChange="onChange"
            :value="value"
        />
    </div>
    
</template>

<script>
    import LettersLayoutFilter from './LettersLayoutFilter'
    import DropdownLayoutFilter from './DropdownLayoutFilter'
    import $ from 'jquery'

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
                valueSelected: '',
                windowWidth: $(window).width()
            }
        },
        computed: {
            isDesktopMode(){
                return this.windowWidth > 1360
            },
            value(){
                return this.valueSelected
            }
        },
        methods: {
            onChange(value, itemsIds){
                this.valueSelected = value
                this.$emit('change', itemsIds)
            },
            onResize(){
                this.windowWidth = $(window).width()
            }
        },
        mounted() {
            window.addEventListener('resize', this.onResize)
        },
        components: {LettersLayoutFilter, DropdownLayoutFilter}
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