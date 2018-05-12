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
        text-align: center;
        width: 100%;
        padding: 20px;
    }

    .more-button {
        padding: 10px 20px;
        background-color: #33de00;
        border-radius: 2px;
        color: white;
        text-transform: uppercase;
    }
</style>