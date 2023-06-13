<template>
  <div class="w-75 h-100 d-flex flex-column justify-content-start align-items-center pb-4">
    <div id="projectsCards" class="px-3 py-4 d-flex justify-content-center flex-wrap gap-4">
      <ProjectComponent :index="index" :projectData="project" v-for="(project,index) in projects" />
    </div>
  </div>
</template>

<script>
  import ProjectComponent from './ProjectComponent.vue';
  import axios from 'axios';
  export default {
    name: "ProjectsCardsComponent",
    components: {
      ProjectComponent
    },
    data(){
      return{
        projects: [],
        apiUrl: 'http://127.0.0.1:8000/api',
        imgBasePath: 'http://127.0.0.1:8000/storage/',
        currentPage: 1,
        lastPage: 1
      }
    },
    methods: {
      getData(numPage){
        axios.get(this.apiUrl+'/projects', {
          params: {
            'page': numPage
          }
        }).then((res) => {
          this.projects = res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        });
      }
    },
    mounted(){
      this.getData(this.currentPage);
    }
  }
</script>

<style lang="scss" scoped>
  
</style>