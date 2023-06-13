<template>
  <HeaderComponent :menuElements="menuElements" />
  <MainComponent :menuElements="menuElements" />
  <FooterComponent />
</template>

<script>
  import HeaderComponent from "./components/mainAreas/HeaderComponent.vue";
  import MainComponent from "./components/mainAreas/MainComponent.vue";
  import FooterComponent from "./components/mainAreas/FooterComponent.vue";
  import { menuData } from './data/data';
  export default {
    name: "App",
    components:{
      HeaderComponent,
      MainComponent,
      FooterComponent
    },
    data(){
      return{
        menuElements: menuData
      }
    }
  }
</script>

<style scoped>

</style>
