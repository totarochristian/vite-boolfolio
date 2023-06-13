<template>
  <footer class="bg-custom-dark d-flex flex-column justify-content-center align-items-center overflow-hidden">
    <span>Made with &hearts; by <strong>Christian Totaro</strong></span>
  </footer>
</template>

<script>
  import BuyComicsComponent from '../subAreas/footer/BuyComicsComponent.vue';
  import SitesComponent from '../subAreas/footer/SitesComponent.vue';
  import ContactsComponent from '../subAreas/footer/ContactsComponent.vue';

  export default {
    name: "FooterComponent"
  }
</script>

<style lang="scss" scoped>
  footer{
    min-height: 70vh;
  }
  @media screen and (max-width: 767.98px){
    footer{
      flex-wrap: wrap;
    }
  }
</style>