<template>
  <div class="columns is-multiline">
    <imgCard v-for="(data,idx) in jsonData" :id="1" :key="idx" :description="data['작품설명']" />
  </div>
</template>

<script>
import helper from '~/assets/js/localStorageHelper'
// eslint-disable-next-line no-unused-vars
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
