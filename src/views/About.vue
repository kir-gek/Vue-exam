<template>
  <div>
      <HeaderComponent/>
      <div class="conc uk-container uk-container-uk-container-small">
          <h1 class=" uk-text-center uk-heading-large">О нас</h1>
          <div v-if="aboutusloader">
              <p class="spinner">
                  <span uk-spinner="ratio: 9"></span>
              </p>
          </div>
          <div v-else>
                {{this.aboutus.text}}
          </div>
      </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/index/HeaderComponent";
import axios from 'axios';
export default {
    name: "About",
    components: {HeaderComponent},

    data: () => ({
        aboutus:null,
        aboutusloader:true
    }),
    mounted() {
        this.getaboutusinfo()
    },
    methods: {
        getaboutusinfo() {
            axios.get('https://demo-api.vsdev.space/api/farm/about_page')
            .then(res => {
                this.aboutus = res.data
                this.aboutusloader = false
            })
        }
    }
}
</script>

<style scoped>
.spinner {
    text-align: center;
}
</style>
