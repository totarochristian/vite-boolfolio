<template>
  <div id="projects" class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
    <ProjectsCardsComponent :page="1" />
  </div>
</template>

<script>
  import ProjectsCardsComponent from '../../single/ProjectsCardsComponent.vue';
  export default {
    name: "ProjectsComponent",
    components: {
      ProjectsCardsComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>