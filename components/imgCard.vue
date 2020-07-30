<template>
  <div class="card column is-3">
    <img :src="imgSrc">

    <div class="middle">
      <div class="text">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'description'],
  data () {
    return {
      imgSrc: `/2020/work/${this.id}/${this.id}.png`
    }
  }
}
</script>

<style lang="scss" scoped>
$backgroundColor: "#4CAF50";
.card {
  height: 300px;

    img {
      overflow: hidden;
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
  position: absolute;
  top: 20%;
  left: 10%;
  width: 80%;
  height: 50%;
  text-align: center;
}

.text {
  display: inline-block; white-space: normal; overflow: hidden; text-overflow: ellipsis;

text-align: left; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical;

  background-color: black;
  color: white;
  font-size: 14px;

  font-family: 'Noto Serif KR', serif;
}

</style>
