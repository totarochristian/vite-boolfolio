<template>
  <div id="projects" class="w-100 h-100 d-flex flex-column justify-content-center align-items-center overflow-y-auto">
    <ProjectsListComponent :page="1" />
  </div>
</template>

<script>
  import ProjectsListComponent from '../../single/ProjectsListComponent.vue';
  export default {
    name: "ProjectsComponent",
    components: {
      ProjectsListComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>