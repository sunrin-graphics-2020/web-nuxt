<template>
  <div class="card column is-3">
    <img :src="imgSrc">

    <div class="middle">
      <div class="text">
        <p class="author">
          {{ author }}
        </p>
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'author', 'description'],
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
    .author {
      display: block;
      margin-bottom: 5px;
    }
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

  font-family: 'Noto Serif KR', serif;
}

</style>
