<template>
  <div id="navigationBar" class="h-100 d-flex justify-content-between align-items-center gap-4">
    <div class="navigationBarElement h-100" v-for="(elem,index) in menuElements" :class="{'active' : elem.isActive}" @click="SetActiveElem(index); redirectTo(elem.link);">
      <span class="h-100 fw-semibold text-uppercase">{{ elem.text }}</span>
    </div>
    <a class="ms-4 fs-6 h-100 fw-bold text-uppercase text-decoration-none text-dark d-flex gap-2 align-items-center" href="http://127.0.0.1:8000/login" target="_blank">
      <i class="fa-solid fa-user"></i>
      <span>Area riservata</span>
    </a>
  </div>
</template>

<script>
  import { router } from '../../router';
  export default {
    name: "NavigationBarComponent",
    props:{
      menuElements: Object
    },
    data(){
      return{
        activeIndex: 0
      }
    },
    methods:{
      SetActiveElem(index){
        this.menuElements[this.activeIndex].isActive = false;
        this.menuElements[index].isActive = true;
        this.activeIndex = index;
      },
      redirectTo(link){
        router.push(link);
      }
    },
    mounted(){
      this.menuElements.forEach((elem,index) =>{
        if(elem.isActive){
          this.activeIndex = index;
        }
      });
    }
  }
</script>

<style lang="scss" scoped>
  $primary: #007bff;

  #navigationBar{
    line-height: 113px;
  }
  .navigationBarElement{
    cursor: pointer;
    border-bottom: 5px solid transparent;
    transition: all 0.1s linear;
    height: 20px;
  }
  .active, .navigationBarElement:hover{
    color: $primary;
    border-bottom: 5px solid $primary;
  }
  a:hover{ color: $primary!important }
  @media screen and (max-width: 1199.98px){
    #navigationBar{
      margin: 0 auto;
    }
  }
</style>