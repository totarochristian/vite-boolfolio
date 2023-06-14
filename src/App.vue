<template>
  <HeaderComponent :menuElements="menuElements" />
  <main class="bg-custom-black text-white d-flex justify-content-center align-items-center overflow-hidden">
    <router-view></router-view>
  </main>
  <FooterComponent />
</template>

<script>
  import HeaderComponent from "./components/mainAreas/HeaderComponent.vue";
  import FooterComponent from "./components/mainAreas/FooterComponent.vue";
  import { menuData } from './data/data';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent
    },
    data(){
      return{
        menuElements: menuData
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
