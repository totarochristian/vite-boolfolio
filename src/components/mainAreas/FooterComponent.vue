<template>
  <footer class="bg-custom-dark d-flex flex-column justify-content-center align-items-center overflow-hidden">
    <span class="text-light">Made with &hearts; by <strong>Christian Totaro</strong></span>
  </footer>
</template>

<script>
  export default {
    name: "FooterComponent"
  }
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 767.98px){
    footer{
      flex-wrap: wrap;
    }
  }
</style>