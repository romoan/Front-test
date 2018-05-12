<template>
    <div class="letters-layout-filter">
        <a v-for="letterFilter in letterFilters"
           :class="[isSelected(letterFilter.value), letterFilter.availableClass]"
           @click="updateSelected"
        >
            {{letterFilter.value}}
        </a>
    </div>
    
</template>

<script>
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
                default: ''
            }
        },
        data() {
            const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('')
            alphabet.unshift('0-9')
            alphabet.push('Ver todos')
            debugger
            return {
                letters: alphabet,
                selectedValue: this.value
            }
        },
        computed: {
            letterFilters() {
                return this.letters.map((letter) => {
                    return {
                        value: letter,
                        availableClass: this.isThereAnyItemForTheLetter(letter) ? 'available' : 'not-available'
                    }
                })
            }
        },
        methods: {
            updateSelected(letter) {
                this.selectedValue = letter
                this.onChange(letter)
            },
            isThereAnyItemForTheLetter(letter){
                const itemsWithTheLetter = this.items.filter((item) => {
                    return item.nick.includes(letter)
                })
                return itemsWithTheLetter.length > 0
            },
            isSelected(value) {
                return value === this.selectedValue ? 'selected' : ''
            }
        }
    }
</script>

<style scoped>
    .letters-layout-filter {
        width: 100%;
    }
</style>