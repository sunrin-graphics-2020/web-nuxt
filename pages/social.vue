<template>
  <div>
    <section class="hero is-large is-fullheight">
      <div class="hero-body">
        <div class="columns logo-box">
          <div class="column center-box has-text-centered">
            <a href="https://www.youtube.com/channel/UCLuJugtij_5JnCelRs5XG2Q"><img class="logo" src="~assets/icon/youtube_blue.png"></a>
            <p class="text">
              Youtube:선린인터넷고등학교 멀티미디어 졸업전시회
            </p>
          </div>

          <div class="column center-box has-text-centered">
            <a href="https://www.facebook.com/SunrinGraduationExhibition"> <img class="logo" src="~assets/icon/facebook_blue.png"></a>
            <p class="text">
              facebook:@SunrinGraduationExhibition
            </p>
          </div>

          <div class="column center-box has-text-centered">
            <a href="https://www.instagram.com/sr.multimedia_exhibition"><img class="logo" src="~assets/icon/instagram_blue.png"></a>
            <p class="text">
              instagram:sr.multimedia_exhibition
            </p>
          </div>
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
.center-box {
    display: grid;
    justify-items: center;
}
.logo-box {
    margin-left: 15%;
    width: 70%;
        .logo {
        display: block;
        width: auto;
        height: 8rem;
    }
    .text {
        display: block;
            font-family:'Carmen Sans Regular';
    color: #1E275B;
    font-size: 14px;
    margin-top: 10px;
    word-break: break-all;
    }
}
</style>
