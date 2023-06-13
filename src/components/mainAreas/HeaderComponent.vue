<template>
  <header class="w-100 h-100 bg-white d-flex justify-content-center align-items-center overflow-hidden">
    <div class="w-75 h-100 d-flex justify-content-between align-items-center">
      <LogoComponent />
      <NavigationBarComponent :menuElements="menuElements"/>
    </div>
  </header>
</template>

<script>
  import LogoComponent from '../single/LogoComponent.vue';
  import NavigationBarComponent from '../single/NavigationBarComponent.vue';
  export default {
    name: "HeaderComponent",
    components:{
      LogoComponent,
      NavigationBarComponent
    },
    props:{
      menuElements: Object
    }
  }
</script>

<style lang="scss" scoped>
  header{
    height: 15vh;
  }
  @media screen and (max-width: 1199.98px){
    header{
      div{
        flex-wrap: wrap;
      }
    }
  }
</style>