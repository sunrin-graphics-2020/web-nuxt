<template>
  <div class="columns is-multiline">
    <imgCard v-for="(data,idx) in jsonData" :id="1" :key="idx" :author="data['이름(영문이름)']" :description="data['작품설명']" />
  </div>
</template>

<script>
import helper from '~/assets/js/localStorageHelper'
import imgCard from '@/components/imgCard.vue'
export default {
  components: { imgCard },
  data () {
    return {
      jsonData: {}
    }
  },
  async mounted () {
    await helper.fetchData()
    this.jsonData = helper.userData()
    console.log(this.jsonData)
  }
}
</script>

<style lang="scss" scoped>
.columns {
    margin: 0;
}
</style>
