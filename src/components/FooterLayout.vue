<template>
    <div class="footer-layout">
        <a class="more-button">
            {{ buttonLabel }}
        </a>
    </div>
    
</template>

<script>
    export default {
        name: "FooterLayout",
        props: {
            buttonLabel: {
                type: String,
                Default: ''
            }
        }
    }
</script>

<style scoped>
    .footer-layout {
        width: 100%;
    }

    .more-button {
        margin: 0 auto;
        text-align: center;
        padding: 10px 20px;
        background-color: #33de00;
        border-radius: 2px;
        color: white;
    }
</style>