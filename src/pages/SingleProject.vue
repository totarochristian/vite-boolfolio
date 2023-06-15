<template>
  <LoaderComponent v-if="loading" />
  <div class="w-100 h-100 overflow-y-auto p-4 d-flex justify-content-center align-items-center gap-4 flex-wrap" v-if="project && !loading">
    <div class="projectImage">
      <img :src="project.image" :alt="project.title" class="w-100 h-100" />
    </div>
    <div class="d-flex flex-column justify-content-center align-items-start gap-4">
      <div class="d-flex justify-content-between align-items-center gap-4 flex-wrap">
        <h1>{{ project.title }}</h1>
        <span class="category text-uppercase fw-bold badge bg-primary">{{ project.category.name }}</span>
      </div>
      <div class="tags d-flex gap-4 flex-wrap">
        <span v-for="tag in project.tags" class="tag text-uppercase fw-bold badge bg-light text-dark">{{ tag.name }}</span>
      </div>
      <p class="pt-3" v-html="project.body"></p>
      <div class="links d-flex gap-4">
        <a :href="project.git_repository" target="_blank" class="btn btn-primary" v-if="project.git_repository">Github repository</a>
        <a :href="project.live_site" target="_blank" class="btn btn-success" v-if="project.live_site">Live site</a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import LoaderComponent from '../components/single/LoaderComponent.vue';

  export default {
    name: 'SingleProject',
    components: {
      LoaderComponent
    },
    data(){
      return {
        project: null,
        apiUrl: 'http://127.0.0.1:8000/api',
        loading: true
      }
    },
    methods: {
      getData(){
        axios.get(this.apiUrl+'/projects/'+this.$route.params.slug).then((res) => {
          console.log(res.data.results);
          this.project = res.data.results;
        }).finally(()=>{
          this.loading = false;
        });
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>

<style lang="scss" scoped>
  .projectImage{
    min-width: 400px;
    max-width: 800px;
  }
</style>