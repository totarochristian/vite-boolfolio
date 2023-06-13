<template>
  <main class="w-100 h-100 bg-custom-black text-white d-flex justify-content-center align-items-center overflow-hidden">
    <ProjectsComponent v-if="menuElements[1].isActive"/>
    <EmptyTitleComponent v-else />
  </main>
</template>

<script>
  import ProjectsComponent from '../subAreas/main/ProjectsComponent.vue';
  import EmptyTitleComponent from '../subAreas/main/EmptyTitleComponent.vue';
  export default {
    name: "MainComponent",
    components:{
      ProjectsComponent,
      EmptyTitleComponent
    },
    props:{
      menuElements: Object
    }
  }
</script>

<style lang="scss" scoped>
  main{
    min-height: 70vh;
  }
</style>