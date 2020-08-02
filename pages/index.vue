<template>
  <div>
    <section class="hero is-large is-fullheight">
      <div class="hero-head" />
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            2020년 선린인터넷고등학교 멀티미디어 졸업전시회
          </h1>
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
