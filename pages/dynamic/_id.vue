<template>
  <div>
    <p>id {{ id }}</p>
    <p>{{ }}</p>
    <p>hello {{ name }}</p>
    <p>당신의 작품은 {{ title }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import helper from '~/assets/js/localStorageHelper'
export default {
  data () {
    return {
      id: this.$route.params.id,
      category: '',
      name: '',
      title: '',
      description: '',
      jsonData: {}
    }
  },
  async mounted () {
    await helper.fetchData()
    this.jsonData = helper.userData()
    this.userInfo()
  },
  methods: {
    userInfo () {
      this.category = this.jsonData[this.id]['대분류\n소분류(있는 경우)']
      this.name = this.jsonData[this.id]['이름(영문이름)']
      this.title = this.jsonData[this.id]['작품제목']
      this.description = this.jsonData[this.id]['작품설명']
    }
  }
}
</script>

<style>

</style>
