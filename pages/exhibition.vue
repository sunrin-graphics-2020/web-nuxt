<template>
  <div class="columns">
    <div class="column is-3">
      <sidebar
        @update="update"
      />
    </div>

    <div class="column is-8">
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
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
import helper from '~/assets/js/localStorageHelper'
import imgCard from '@/components/imgCard.vue'
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  components: { imgCard, sidebar },
  data () {
    return {
      jsonData: {},
      select: ''
    }
  },
  async mounted () {
    await helper.fetchData()
    this.jsonData = helper.userData()
    console.log(this.jsonData)
  },
  methods: {
    update (data) {
      this.select = data
    },
    listStyle (i) {
      let style = {}
      if (!this.jsonData[i]['대분류\n소분류(있는 경우)'].includes(this.select)) {
        style = 'display:none;'
      }
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
