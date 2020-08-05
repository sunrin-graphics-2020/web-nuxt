<template>
  <div class="columns">
    <div class="column is-3">
      <sidebar
        @update="update"
      />
    </div>
    <div class="column is-8">
      <p class="category is-hidden-mobile">
        {{ select }}
      </p>
      <div class="columns is-multiline">
        <imgCard
          v-for="(data,index) in jsonData"
          :id="index+1"
          :key="index"
          :style="listStyle(index)"
          :author="jsonData[index]['이름(영문이름)']"
          :description="jsonData[index]['작품설명']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
import helper from '~/assets/js/localStorageHelper'
import imgCard from '@/components/imgCard.vue'
import search from '~/assets/js/searchHelper'
export default {
  components: { imgCard, sidebar },
  data () {
    return {
      jsonData: {},
      select: '',
      selectArr: []
    }
  },
  async mounted () {
    await helper.fetchData()
    this.jsonData = helper.user()
    console.log(this.jsonData)
  },
  methods: {
    update (data) {
      this.select = data
      this.selectArr = search.searchArr(data)
    },
    listStyle (i) {
      let style = {}
      if (this.select === '') { return style }
      if (!this.selectArr.includes(i)) {
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
.category {
    font-family:'Carmen Sans Regular';
    font-size: 25px;
    margin: 20px 0px;
}
.spin {
  position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 50%;
    z-index: 100;
}
.is-8 {
  padding: 0;
  padding-left: 5px;
}
@media screen and (min-width: 769px) and (max-width: 787px) {
.is-8 {
  margin-left: 10rem;
      width: 250px;
}
  }
</style>
