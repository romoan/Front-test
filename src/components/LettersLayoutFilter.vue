<template>
    <div class="letters-layout-filter">
        <a v-for="letterFilter in letterFilters"
           :class="['letters',isSelected(letterFilter.value), letterFilter.availableClass]"
           @click="updateSelected(letterFilter.value)"
        >
            {{letterFilter.value}}
        </a>
    </div>
    
</template>

<script>
    const NUMERIC_FILTER = '0-9'
    const ALL_FILTER = 'Ver todos'

    export default {
        name: "LettersLayoutFilter",
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
            }
        },
        computed: {
            selected(){
                if (this.value === '') {
                    return ALL_FILTER
                }
                return this.value
            },
            letterFilters() {
                return this.letters.map((letter) => {
                    return {
                        value: letter,
                        availableClass: this.isThereAnyItemForTheLetter(letter) ? 'available' : 'not-available'
                    }
                })
            },
        },
        methods: {
            updateSelected(letter) {
                if (this.isThereAnyItemForTheLetter(letter)) {
                    const availableItems = this.filterItems(letter)
                    const itemsIds = availableItems.map((item) => {
                        return item.id
                    })
                    this.onChange(letter, itemsIds)
                }
            },
            isThereAnyItemForTheLetter(letter){
                const itemsWithTheLetter = this.filterItems(letter)
                return itemsWithTheLetter.length > 0
            },
            filterItems(letter){
                if (letter === NUMERIC_FILTER) {
                    return this.itemsWithNumbers()
                } else if (letter === ALL_FILTER){
                    return this.items
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
            isSelected(value) {
                return value === this.selected ? 'selected' : ''
            },
            selectAll(){
                const itemsIds = this.items.map((item) => {
                    return item.id
                })
                this.onChange('', itemsIds)
            }
        }
    }
</script>

<style scoped>
    .letters-layout-filter {
        width: 100%;
        margin-bottom: 35px;
    }
    a.letters {
        font-size: 22px;
        margin-left: 1.5%;
    }
    a.available {
        color: #929194;
        cursor: pointer;
    }
    a.not-available {
        color: #47474b;
    }
    a.selected {
        padding: 9px 9px 6px 9px;
        background-color: #33de00;
        border-radius: 3px;
        margin-left: 5px;
    }
</style>