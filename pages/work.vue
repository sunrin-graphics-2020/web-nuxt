<template>
  <div class="columns">
    <div class="column is-3">
      <sidebar />
    </div>

    <div class="column is-7">
      <div class="columns is-multiline">
        <imgCard
          v-for="(data,idx) in jsonData"
          :id="idx+1"
          :key="idx+1"
          :style="listStyle(idx)"
          :author="jsonData[idx]['이름(영문이름)']"
          :description="jsonData[idx]['작품설명']"
        />
      </div>
    </div>

    <div class="column is-2" />
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
import helper from '~/assets/js/localStorageHelper'
import imgCard from '@/components/imgCard.vue'

export default {
  components: { imgCard, sidebar },
  data () {
    return {
      jsonData: {}
    }
  },

  async mounted () {
    await helper.fetchData()
    this.jsonData = helper.userData()
    console.log(this.jsonData)
  },
  methods: {
    listStyle (i) {
      const style = {}
      /*
      if (i === 0 || i === 2) {
        return style
      }
      if (i === 1 || i === 3) {
        style = 'margin-top: 3rem;'
        return style
      }
      if (i % 2 === 0) {
        style = 'margin-top: -3rem;'
        return style
      } */
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
.columns {
    margin: 0;
}
</style>
