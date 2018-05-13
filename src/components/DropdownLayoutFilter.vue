<template>
    <div class="dropdown-filter">
        <Multiselect
            v-model="selected"
            :options="letters"
            :show-labels="false"
            :searchable="false"
            :allow-empty="false"
            @select="select"
        >
        </Multiselect>
    </div>
    
</template>

<script>
    import LettersLayoutFilter from './LettersLayoutFilter'
    import Multiselect from 'vue-multiselect'

    const NUMERIC_FILTER = '0-9'
    const ALL_FILTER = 'Ver todos'

    export default {
        extends: LettersLayoutFilter,
        name: "DropdownLayoutFilter",
        props: {
            items: {
                type: Array,
                required: true
            },
            onChange: {
                type: Function
            },
            value: {
                type: String,
                default: ALL_FILTER
            }
        },
        data() {
            const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('')
            alphabet.unshift(NUMERIC_FILTER)
            alphabet.push(ALL_FILTER)
            return {
                letters: alphabet,
                selected: ALL_FILTER
            }
        },
        watch: {
        },
        computed: {
        },
        methods: {
            select(value) {
                debugger
                this.selected = value
                if (this.selected == ALL_FILTER) {
                    this.selectAll()
                } else if (this.isThereAnyItemForTheLetter(this.selected)) {
                    const availableItems = this.filterItems(this.selected)
                    const itemsIds = availableItems.map((item) => {
                        return item.id
                    })
                    this.onChange(this.selected, itemsIds)
                }
            },
            isThereAnyItemForTheLetter(letter){
                const itemsWithTheLetter = this.filterItems(letter)
                return itemsWithTheLetter.length > 0
            },
            filterItems(letter){
                if (letter === NUMERIC_FILTER) {
                    return this.itemsWithNumbers()
                }
                return this.itemsWithTheLetter(letter)
            },
            itemsWithNumbers(){
                return this.items.filter((item) => {
                    return /\d/.test(item.nick)
                })
            },
            itemsWithTheLetter(letter){
                return this.items.filter((item) => {
                    const nick = item.nick ? item.nick.toLowerCase() : ''
                    return nick.includes(letter.toLowerCase())
                })
            },
            selectAll(){
                const itemsIds = this.items.map((item) => {
                    return item.id
                })
                this.onChange('', itemsIds)
            }
        },
        components: {Multiselect}
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

</style>