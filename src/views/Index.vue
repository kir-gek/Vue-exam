<template>
    <div>
        <HeaderComponent/>
        <div class="conc uk-container uk-container-uk-container-small">
            <BodyComponent/>
        </div>
    </div>
</template>

<script>
import BodyComponent from "../components/index/BodyComponent";
import HeaderComponent from "../components/index/HeaderComponent";
export default {
    name: "Index",
    components: {BodyComponent, HeaderComponent}
}
</script>

<style scoped>
.conc {

}
</style>
