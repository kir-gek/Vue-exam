<template>
<div>
    <p class="buttonchick">
    <button class=" uk-button btn btn-primary" type="button" uk-toggle="target: #offcanvas-overlay">Открыть левый виджет</button>
    </p>
    <div v-if="leftwidgetloader">
<!--        <div uk-spinner></div>-->
    </div>
    <div v-else id="offcanvas-overlay" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>


            <h3>В нашем роддоме ежедневно рождаются десятки милейших зверушек</h3>
            <img data-src="assets/left_widget_img.jpg" width="1800" height="1200" alt="" uk-img>
            <p>Количество коров: {{this.leftwidget.cows}}</p>
            <p>Количество кроликов: {{this.leftwidget.rabbits}}</p>
            <p>Количество овец: {{this.leftwidget.sheeps}}</p>
        </div>
    </div>
    <div v-if="homepageloader" >
    </div>
    <div v-else class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" v-bind:data-src="this.homepage.image" uk-img>
    </div>
    <p>{{this.homepage.text}}</p>

    <h1 class=" uk-text-center uk-heading-large">Наши животные</h1>
    <div v-if="animalloader">
        <p class="spinner">
        <span uk-spinner="ratio: 9"></span>
        </p>
    </div>
    <div v-else class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center" uk-grid>
        <div v-for="animal in animals">
            <div class="uk-card uk-card-default uk-card-body">
                <p>Имя: {{animal.name}}</p>
                <p>Пол: {{animal.sex}}</p>
                <p>Вес: {{animal.weight}}</p>
                <p>Цвет: {{animal.color}}</p>
            </div>


        </div>
    </div>



</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "BodyComponent",

    data: () => ({
        leftwidget:null,
        leftwidgetloader:true,
        homepage:null,
        homepageloader:true,
        animals:null,
        animalloader:true,
    }),

    mounted() {
        this.getleftwidget()
        this.gethomepage()
        this.getanimal()
    },

    methods: {
        getleftwidget() {
            axios.get('https://demo-api.vsdev.space/api/farm/left_widget')
            .then(res => {
                this.leftwidget = res.data
                this.leftwidgetloader = false
                console.log(this.leftwidget)
            })
        },
        gethomepage() {
            axios.get('https://demo-api.vsdev.space/api/farm/home_page')
            .then(res => {
                this.homepage = res.data
                this.homepageloader = false
                console.log(this.homepage)
            })
        },
        getanimal() {
            axios.get('https://demo-api.vsdev.space/api/farm/baby')
            .then(res => {
                this.animals = res.data
                this.animalloader = false
            })
        }
    },
}
</script>

<style scoped>
.buttonchick {
    margin-top:10px;
    text-align:center;
}
.spinner {
    text-align:center;
}
</style>
