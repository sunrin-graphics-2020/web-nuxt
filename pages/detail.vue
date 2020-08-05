<template>
  <div class="columns">
    <div class="column is-1 is-hidden-mobile" />
    <div class="column is-8">
      <div class="image-box">
        <img v-for="(data,idx) in img" :key="idx" v-lazy-load :src="imgSrc(idx)">
      </div>

      <div class="detail">
        <p class="category">
          {{ category }}
        </p>
        <p class="title">
          {{ title }}
        </p>
        <p class="description">
          {{ description }}
        </p>
        <div v-for="index in name.length" :key="index" class="is-hidden-touch user">
          <p>{{ name[index-1] }}</p>
          <p>{{ email[index-1] }}</p>
          <p>{{ etc[index-1] }}</p>
        </div>
        {{ video }}
        <div class="video-responsive">
          <iframe width="420" height="315" :src="video" frameborder="0" allowfullscreen />
        </div>
        <!--
        <youtube v-if="video" class="video-responsive" :video-id="video" />
        -->
      </div>
    </div>

    <div class="column is-3">
      <div class="sticky is-hidden-desktop has-text-centered">
        <p v-for="index in name.length" :key="index">
          {{ name[index-1] }}
          {{ email[index-1] }}
          {{ etc[index-1] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { getIdFromURL } from 'vue-youtube-embed'
import helper from '~/assets/js/localStorageHelper'
export default {
  data () {
    return {
      id: Number(this.$route.query.index),
      video: '',
      category: '',
      name: [],
      title: '',
      description: '',
      email: '',
      etc: '',
      videoWidth: 520,
      img: {},
      jsonData: {}
    }
  },
  async mounted () {
    await helper.fetchData()
    this.jsonData = helper.userData(this.id)
    if (this.jsonData.video) {
      // this.video = getIdFromURL(this.jsonData.video)
      this.video = this.jsonData.video
    } else {
      this.video = false
    }
    this.userInfo()
    this.img = helper.fileData(this.id)
  },
  methods: {
    userInfo () {
      this.category = this.jsonData['대분류\n소분류(있는 경우)']
      this.name = this.jsonData['이름(영문이름)'].split('\n')
      this.title = this.jsonData['작품제목']
      this.description = this.jsonData['작품설명']
      this.email = this.jsonData['이메일'].split('\n')
      this.etc = this.jsonData['기타 개인 포트폴리오'].split('\n')
      this.etc.forEach((element, idx) => {
        if (element === '-') {
          this.etc[idx] = ''
        }
      })
    },
    imgSrc (idx) {
      return `/2020/work/${this.id}/${this.img[idx]}`
    }
  }
}
</script>

<style lang="scss" scoped>

.video-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.video-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}

.image-box {
  img {
    width: 100%;
    height: auto;
  }
}

.detail {
  margin-top: 30px;
  padding: 20px;
    .category {
      display: block;
      font-family:'Carmen Sans Regular';
      font-size: 25px;
      font-weight: 700;
      color: #1E275B;
  }
  .title{
      display: block;
      font-family:'Carmen Sans Regular';
      font-size: 22px;
  }
  .description {
      display: block;
      font-family:'Carmen Sans Regular';
      font-size: 16px;
  }
}

.sticky {
  padding: 10px;
  padding-left: 0px;
  position: fixed;
  background-color: #E7E7E7;
  font-family:'Carmen Sans Regular';
  font-size: 16px;
  max-width: 250px;
  height: auto;
  p {
    margin: 10px;
    word-break: break-word;
  }

}
.user {
    background-color: #E7E7E7;
      p {
    margin: 10px;
    word-break: break-word;
  }
}
</style>
