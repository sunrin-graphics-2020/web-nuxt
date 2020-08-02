<template>
  <div>
    <section class="hero is-large is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img class="title-img" src="~assets/icon/paran_logo.png">
          <h2 class="subtitle">
            2020년 제 8회 선린인터넷고등학교 전시회
          </h2>
          <div class="description-box">
            <p>서울 특별시 원효로 97길 33-4</p>
            <p>선린인터넷고등학교 3호과 2층 디자인 실습실</p>
            <p>Tel. 713-6213 | Fax. 704-0960</p>
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
    color: #293682;
}
.description-box {
    font-family:'Carmen Sans Regular';
    margin-top: 5rem;
    color: #293682;
}
</style>
