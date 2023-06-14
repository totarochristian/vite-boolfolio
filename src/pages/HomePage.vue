<template>
  <div class="w-100 h-100">
    <ProjectsComponent/>
  </div>
</template>

<script>
  import ProjectsComponent from '../components/subAreas/main/ProjectsComponent.vue';
  
  import { menuData } from '../data/data';
  export default {
    name: "HomePage",
    components:{
      ProjectsComponent
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