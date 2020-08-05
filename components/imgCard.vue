<template>
  <!-- 태블릿 - column 4  -->
  <div class="card column">
    <a :href="urlSrc">
      <div class="img-box">
        <img v-lazy-load :src="imgSrc">
      </div>

      <div class="middle">
        <div class="text">
          <p class="author">
            {{ author }}
          </p>
          {{ description }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import helper from '~/assets/js/localStorageHelper'
export default {
  props: ['id', 'author', 'description'],
  data () {
    return {
      imgSrc: '',
      urlSrc: '/2020/detail?index=',
      img: {}
    }
  },
  mounted () {
    this.img = helper.fileData(this.id)
    this.imgSrc = `/2020/thumbnail/thumbnail${this.id}.png`
    this.urlSrc += this.id
  }
}
</script>

<style lang="scss" scoped>
$backgroundColor: "#4CAF50";
.card {
  margin: 5px;
  overflow: hidden;
  min-width: 250px;
  max-width: 250px;
  height: auto;
    .author {
      display: block;
      margin-bottom: 5px;
    }
    .img-box {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
        img {
          height: auto;
          width: 100%;
      }
    }

  &:hover img {
  opacity: 0.3;
}

  &:hover .middle {
    opacity: 0.8;
  }
}
.middle {
  transition: .5s ease;
  opacity: 0;
  background-color: black;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  padding: 12px 30px;
  text-align: center;
  align-items: center;
  display: flex;
}

.text {
  display: inline-block; white-space: normal; overflow: hidden; text-overflow: ellipsis;
  text-align: left; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical;
  color: white;
  font-size: 14px;

  font-family:'Carmen Sans Regular';
}

@media screen and (max-width: 768px) {
  .card {
      max-width: 1000px;
    }
  }

</style>
