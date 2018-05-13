<template>
    <div class="dropdown-filter">
        <Multiselect
            class="multiselect-dropdown"
            v-model="selected"
            :options="letterFilters"
            :show-labels="false"
            :searchable="false"
            :allow-empty="false"
            @select="updateSelected"
            label="label"
            track-by="label"
        >
        </Multiselect>
    </div>
    
</template>

<script>
    import LettersLayoutFilter from './LettersLayoutFilter'
    import Multiselect from 'vue-multiselect'

    const ALL_FILTER = 'Ver todos'

    export default {
        extends: LettersLayoutFilter,
        name: "DropdownLayoutFilter",
        computed: {
            selected(){
                if (this.value === '') {
                    return {label: ALL_FILTER, $isDisabled: false}
                }
                return this.letterFilters.find((option) => {
                    return option.label === this.value
                })
            },
            letterFilters(){
                return this.letters.map((letter) => {
                    if (this.isThereAnyItemForTheLetter(letter)){
                        return {label: letter, $isDisabled: false}
                    }
                    return {label: letter, $isDisabled: true}
                })
            },
        },
        methods: {
            updateSelected(value) {
                if (value.label === ALL_FILTER) {
                    this.selectAll()
                } else if (this.isThereAnyItemForTheLetter(value.label)) {
                    const availableItems = this.filterItems(value.label)
                    const itemsIds = availableItems.map((item) => {
                        return item.id
                    })
                    this.onChange(value.label, itemsIds)
                }
            },
        },
        components: {Multiselect}
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
    .multiselect-dropdown .multiselect__tags {
        background: #52525b;
        border-color: #2d2c31;
    }
    .multiselect-dropdown .multiselect__content-wrapper{
        background: #52525b;
        border-color: #2d2c31;
        color: white;
    }
    .multiselect-dropdown .multiselect__tags .multiselect__single {
        color: white;
        background: #52525b;
    }
    .multiselect-dropdown .multiselect__select:before {
        border-color: white transparent transparent;
    }
    .multiselect-dropdown .multiselect__option--selected {
        background: #cacacd;
    }
    .multiselect-dropdown .multiselect__option--highlight {
        background: #61616b;
    }
    .multiselect-dropdown .multiselect__option--disabled{
        background: #52525b;
        color: #7f7e81;
    }
</style>