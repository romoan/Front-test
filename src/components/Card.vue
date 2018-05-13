<template>
    <div class="card-slot col-sm-6 col-md-3">
        <img class="card" :src="imageSRC" :style="style" @click="relocate"/>
        <span class="card-content">
            <a class="card-title" v-if="nick">{{nick}}</a>
            <a class="card-title" v-if="team">{{team}}</a>
            <a class="card-subtitle" v-if="name">{{name}}</a>
            <a class="card-subtitle" v-if="surname">{{surname}}</a>
            <a class="card-role" v-if="role">{{role}}</a>
        </span>
    </div>
</template>

<script>
    import fallbackImage from '../asets/images/fake-image-player-V.jpg'

    export default {
        name: "Card",
        props: {
            imageURL: {
                type: String,
                default: ''
            },
            nick: {
                type: String,
                default: ''
            },
            team: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            surname: {
                type: String,
                default: ''
            },
            role: {
                type: String,
                default: ''
            },
            roleLink: {
                type: Object,
                default: () => {
                    return { URL: '', target: null }
                }
            }
        },
        computed: {
            style() {
                let cursorPointer = ''
                if (this.roleLink.URL) {
                    cursorPointer = '; cursor: pointer'
                }
                return cursorPointer
            },
            imageSRC(){
                let image = fallbackImage
                if(this.imageURL){
                    image = `${this.imageURL}`
                }
                return image

            }
        },
        methods: {
            relocate() {
                if (this.roleLink.URL){
                    if (this.roleLink.target){
                        window.open(this.roleLink.URL, '_blank');
                    } else {
                        window.location.href = this.roleLink.URL
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .card-slot{
        display: inline-block;
        padding: 0.6% 0.9%;
    }
    .card {
        width: 100%;
        max-height: 427px;
        border-radius: 0px;
        vertical-align: text-bottom;
    }
    .card-content {
        position: absolute;
        bottom: 0;
        padding-bottom: 9.6%;
        color: white;
        text-align: center;
        width: 100%;
    }
    .card-content a:not(.card-role) {
        display: block;
    }
    .card-title {
        font-weight: bold;
        font-size: 3vw;
        line-height: 1;
    }
    .card-subtitle {

    }
    .card-role {
        border: 1px solid white;
        padding: 4px 7px;
        border-radius: 12px;
    }
</style>