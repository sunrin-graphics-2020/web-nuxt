<template>
  <div class="main">
    <div class="image-box">
      <img v-for="(data,idx) in img" :key="idx" v-lazy-load :src="imgSrc(idx)">
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
      name: '',
      title: '',
      description: '',
      img: {},
      jsonData: {}
    }
  },
  async mounted () {
    await helper.fetchData()
    this.jsonData = helper.userData()
    this.userInfo()
    this.img = helper.fileData(this.id)
    console.log(this.img)
  },
  methods: {
    userInfo () {
      this.category = this.jsonData[this.id - 1]['대분류\n소분류(있는 경우)']
      this.name = this.jsonData[this.id - 1]['이름(영문이름)']
      this.title = this.jsonData[this.id - 1]['작품제목']
      this.description = this.jsonData[this.id - 1]['작품설명']
    },
    imgSrc (idx) {
      return `/2020/work/${this.id}/${this.img[idx]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  max-width: 1620px;

  .image-box {

  }
}
</style>
