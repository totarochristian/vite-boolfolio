<template>
  <div :id="'project_'+index" class="project d-flex flex-column gap-2">
    <div class="projectImage">
      <img :src="projectData.image" :alt="projectData.title" class="w-100 h-100">
      <span class="category text-uppercase fw-bold badge bg-primary">{{ projectData.category.name }}</span>
    </div>
    <h5 class="w-100 pt-3 fw-bold">{{ projectData.title }}</h5>
    <p class="w-100 pt-3" v-html="projectData.body"></p>
    <a :href="projectData.git_repository" target="_blank" class="btn btn-primary" v-if="projectData.git_repository">Github repository</a>
    <a :href="projectData.live_site" target="_blank" class="btn btn-success" v-if="projectData.live_site">Live site</a>
  </div>
</template>

<script>
  export default {
    name: "ProjectCardComponent",
    props:{
      index: Number,
      projectData: Object
    }
  }
</script>

<style lang="scss" scoped>
  $squareSize: 210px;
  .project{
    width: $squareSize;
    .projectImage{
      position: relative;
      width: 100%;
      height: $squareSize;
      img{
        object-fit: cover;
      }
      .category{
        visibility: hidden;
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    &:hover{
        cursor: pointer;
        .projectImage{
          img{
            filter: brightness(50%);
          }
          .category{
            visibility: visible;
          }
        }
      }
  }
</style>