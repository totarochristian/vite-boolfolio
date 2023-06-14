<template>
  <MainComponent :menuElements="menuElements" />
</template>

<script>
  
  import MainComponent from "../components/mainAreas/MainComponent.vue";
  
  import { menuData } from '../data/data';
  export default {
    name: "HomePage",
    components:{
      MainComponent
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