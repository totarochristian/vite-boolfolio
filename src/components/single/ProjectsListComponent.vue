<template>
  <LoaderComponent v-if="loading"/>
  <div class="w-75 h-100 d-flex flex-column justify-content-start align-items-center pb-4 gap-4" v-if="!loading">
    <div id="projectsCards" class="px-3 py-4 d-flex justify-content-center flex-wrap gap-4">
      <ProjectCardComponent :index="index" :projectData="project" v-for="(project,index) in projects" />
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="currentPage==1 ? 'disabled' : ''">
          <button class="page-link" @click="getData(currentPage-1)">Precedente</button>
        </li>
        <li class="page-item" :class="currentPage==elem ? 'active' : ''" v-for="elem in lastPage">
          <button class="page-link" @click="getData(elem)">{{elem}}</button>
        </li>
        <li class="page-item" :class="currentPage==lastPage ? 'disabled' : ''">
          <button class="page-link" @click="getData(currentPage+1)">Successivo</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import ProjectCardComponent from './ProjectCardComponent.vue';
  import LoaderComponent from './LoaderComponent.vue';
  import axios from 'axios';
  export default {
    name: "ProjectsListComponent",
    components: {
      ProjectCardComponent,
      LoaderComponent
    },
    data(){
      return{
        projects: [],
        apiUrl: 'http://127.0.0.1:8000/api',
        currentPage: 1,
        lastPage: 1,
        loading: true
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
        }).finally(()=>{
          this.loading = false;
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