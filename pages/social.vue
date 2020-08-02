<template>
  <div>
    <section class="hero is-large is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img class="title-img" src="~assets/icon/paran_logo.png">

          Youtube:선린인터넷고등학교 멀티미디어 졸업전시회   /   https://www.youtube.com/channel/UCLuJugtij_5JnCelRs5XG2Q
          facebook:@SunrinGraduationExhibition    / https://www.facebook.com/SunrinGraduationExhibition
          instagram:sr.multimedia_exhibition   /  https://www.instagram.com/sr.multimedia_exhibition/
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
.title-img {
    width: 50%;
    height: auto;
}
.hero-body {
    padding-top: 0px !important;
}
.subtitle {
    font-family:'Carmen Sans Regular';
    color: #1E275B;
}
.description-box {
    font-family:'Carmen Sans Regular';
    margin-top: 5rem;
    color: #1E275B;
}
</style>
