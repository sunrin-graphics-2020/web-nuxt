<template>
  <div>
    <div class="has-text-centered">
      <div class="option-box">
        <input id="Video" v-model="picked" type="radio" value="영상">
        <label for="Video" onclick="">Video</label>
        <input id="3DModeling" v-model="picked" type="radio" value="3D 디자인">
        <label for="3DModeling">3D Modeling</label>
        <input id="GameDesign" v-model="picked" type="radio" value="게임 디자인">
        <label for="GameDesign">GameDesign</label>
        <input id="Branding" v-model="picked" type="radio" value="시각 디자인">
        <label for="Branding">Branding</label>
        <input id="Illustration" v-model="picked" type="radio" value="일러스트레이션">
        <label for="Illustration">Illustration</label>
        <input id="Product" v-model="picked" type="radio" value="캐릭터 디자인">
        <label for="Product">Character</label>
        <input id="Product" v-model="picked" type="radio" value="프로덕트 디자인">
        <label for="Product">Product</label>
        <input id="UI/UXDesign" v-model="picked" type="radio" value="UI/UX 디자인">
        <label for="UI/UXDesign">UI/UXDesign</label>
      </div>
    </div>
  </div>
</template>

<script>
// mobile 935
// tablet :
export default {
  data () {
    return {
      searchText: '',
      picked: ''
    }
  },
  watch: {
    picked () {
      this.update()
    }
  },
  methods: {
    update () {
      this.$emit('update', this.picked)
    }

  }
}
</script>

<style lang="scss" scoped>
.search-box {
  .input {
    display:block;
    border: 0;
    outline: 0;
    box-shadow: none;
    background: transparent;
    border-bottom: 2px solid black;
    width: 80%;
    margin-left: 10%;
    font-family:'Carmen Sans Regular';
    height: 30px;
    color: black;
    border-radius: 0;
  }
}
.option-box {
  margin-top: 5rem;
  input {
    display: none;
  }
  label {
    display: block;
    margin-bottom: 3rem;
    font-family:'Carmen Sans Regular';
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
    .option-box {
      margin-top: 1rem;
      margin-bottom: 1rem;
      label {
      display: inline;
      margin: 1rem;
      }

    }
  }
</style>
