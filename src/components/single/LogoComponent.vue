<template>
  <img id="logo" src="/images/dc-logo.png" alt="Logo DC">
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
      margin-top: 2.5rem;
    }
  }
</style>