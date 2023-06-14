<template>
  <div :id="'project_'+index" class="project d-flex flex-column gap-2" @click="redirectToDetail">
    <div class="projectImage">
      <img :src="projectData.image" :alt="projectData.title" class="w-100 h-100">
      <h4 class="title w-100 pt-3 fw-bold">{{ projectData.title }}</h4>
      <span class="category text-uppercase fw-bold badge bg-primary">{{ projectData.category.name }}</span>
    </div>
  </div>
</template>

<script>
import { router } from '../../router';

  export default {
    name: "ProjectCardComponent",
    props:{
      index: Number,
      projectData: Object
    },
    methods: {
      redirectToDetail(){
        let link = {
          name: 'project',
          params: {
            slug: this.projectData.slug
          }
        };
        router.push(link);
      }
    }
  }
</script>

<style lang="scss" scoped>
  $squareSize: 280px;
  .project{
    width: $squareSize;
    .projectImage{
      position: relative;
      width: 100%;
      height: $squareSize;
      img{
        object-fit: cover;
      }
      .category,.title{
        visibility: hidden;
        position: absolute;
      }
      .category{
        top: 10px;
        right: 10px;
      }
      .title{
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
      }
    }
    &:hover{
        cursor: pointer;
        .projectImage{
          img{
            filter: brightness(50%);
          }
          .category,.title{
            visibility: visible;
          }
        }
      }
  }
</style>