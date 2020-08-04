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
        <div v-for="index in name.length" :key="index" class="is-hidden-tablet user">
          <p>{{ name[index-1] }}</p>
          <p>{{ email[index-1] }}</p>
          <p>{{ etc[index-1] }}</p>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="sticky is-hidden-mobile has-text-centered">
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
import helper from '~/assets/js/localStorageHelper'
export default {
  data () {
    return {
      id: Number(this.$route.query.index),
      category: '',
      name: [],
      title: '',
      description: '',
      email: '',
      etc: '',
      img: {},
      jsonData: {}
    }
  },
  async mounted () {
    await helper.fetchData()
    this.jsonData = helper.userData()
    this.userInfo()
    this.img = helper.fileData(this.id)
  },
  methods: {
    userInfo () {
      this.category = this.jsonData[this.id - 1]['대분류\n소분류(있는 경우)']
      this.name = this.jsonData[this.id - 1]['이름(영문이름)'].split('\n')
      this.title = this.jsonData[this.id - 1]['작품제목']
      this.description = this.jsonData[this.id - 1]['작품설명']
      this.email = this.jsonData[this.id - 1]['이메일'].split('\n')
      this.etc = this.jsonData[this.id - 1]['기타 개인 포트폴리오'].split('\n')
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
  position: fixed;
  background-color: #E7E7E7;
  font-family:'Carmen Sans Regular';
  font-size: 16px;
  max-width: 250px;
  height: auto;
  p {
    margin: 10px;
    word-wrap: break-word;
  }

}
.user {
    background-color: #E7E7E7;
      p {
    margin: 10px;
    word-wrap: break-word;
  }
}
</style>
