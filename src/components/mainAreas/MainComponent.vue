<template>
  <main class="bg-custom-black text-white d-flex justify-content-center align-items-center overflow-hidden">
    <div class="w-100 h-100">
      <ProjectsComponent v-if="menuElements[0].isActive"/>
      <EmptyTitleComponent v-else />
    </div>
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
</style>