<template>
  <div>
    <section class="hero is-large is-fullheight">
      <div class="hero-head" />
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Using .navbar
          </h1>
          <h2 class="subtitle">
            Works! :)
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import helper from '~/assets/js/localStorageHelper'
export default {
  components: { },
  mounted () {
    helper.removeData()
    helper.fetchData()
  }
}
</script>

<style lang="scss" scoped>

</style>
