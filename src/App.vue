<template>
  <HeaderComponent :menuElements="menuElements" />
  <router-view></router-view>
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
