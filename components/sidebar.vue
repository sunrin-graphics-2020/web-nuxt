<template>
  <div>
    <div style="side-bar">
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
        <input id="Character" v-model="picked" type="radio" value="캐릭터 디자인">
        <label for="Character">Character</label>
        <input id="Product" v-model="picked" type="radio" value="프로덕트 디자인">
        <label for="Product">Product</label>
        <input id="UI/UXDesign" v-model="picked" type="radio" value="UI/UX 디자인">
        <label for="UI/UXDesign">UI/UX Design</label>
      </div>
    </div>
  </div>
</template>

<script>
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
  position: fixed;
  margin-top: 0px;
  margin-left: 5rem;
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

.side-bar {
  margin-left:2rem;
}

@media screen and (max-width: 768px) {
    .option-box {
      position: relative;
      display: block;
      margin:0;
      label {
      display: inline;
      margin: 1rem;
      }
    }
  }
</style>
