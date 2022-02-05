<template>
<div>
    <nav class="uk-navbar-container" uk-navbar>

        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><router-link to="/">Фермерский роддом номер 5
                </router-link></li>
                <li>
                    <router-link to="/about">О нас</router-link>
                </li>
            </ul>

        </div>


    </nav>
</div>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>

</style>
