<template>
    <div class="content-layout">
        <Card v-for="item in items"
              :key="item.id"
              :imageURL="item.imageURL"
              :nick="item.nick"
              :team="item.team"
              :name="item.name"
              :surname="item.surname"
              :role="item.role"
              :roleLink="item.roleLink"
        >
        </Card>
    </div>
    
</template>

<script>
    import Card from "./Card"

    export default {
        name: "ContentLayout",
        props: {
            items: {
                type: Array,
                default: {}
            }
        },
        components: {Card}
    }
</script>

<style scoped>
    .content-layout {
        width: 100%;
    }

</style>