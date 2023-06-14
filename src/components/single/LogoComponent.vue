<template>
  <div id="logoContainer" class="h-100 d-flex justify-content-center align-items-center gap-4">
    <div class="d-flex gap-4 align-items-center">
      <img id="logo" src="/images/logo.webp" alt="Logo DC" />
      <h1>Boolfolio</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LogoComponent"
  }
</script>

<style lang="scss" scoped>
  #logo{
    height: 80px;
    width: 80px;
  }
  @media screen and (max-width: 1199.98px){
    #logo{
      height: 100px;
      width: 100px;
      margin: 0 auto;
    }
    #logoContainer{
      width: 100%;
    }
  }
</style>