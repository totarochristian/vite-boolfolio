<template>
  <footer class="bg-custom-dark d-flex flex-column justify-content-center align-items-center overflow-hidden">
    <p class="text-light">Made with &hearts; by <strong>Christian Totaro</strong></p>
  </footer>
</template>

<script>
  export default {
    name: "FooterComponent"
  }
</script>

<style lang="scss" scoped>
  footer{
    min-height: 17.6vh;
  }
  @media screen and (max-width: 767.98px){
    footer{
      flex-wrap: wrap;
    }
  }
</style>