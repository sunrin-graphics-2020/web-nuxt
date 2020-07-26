<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        web-nuxt
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import helper from '~/assets/js/localStorageHelper'
export default {
  mounted () {
    helper.removeData()
    helper.fetchData()
  }
}
</script>

<style lang="scss" scoped>

</style>
