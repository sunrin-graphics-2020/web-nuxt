<template>
  <div>
    <div class="has-text-centered">
      <div class="option-box">
        <p>Video</p>
        <p>3D Modeling</p>
        <p>Game Design</p>
        <p>Branding</p>
        <p>Illustration</p>
        <p>Product</p>
        <p>UI/UX Design</p>
      </div>
      <div class="search-box">
        <input v-model="searchText" class="input" placeholder="작가 이름, 작품 제목, 작품 설명">
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
      searchText: ''
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
  p {
    margin-bottom: 3rem;
    font-family:'Carmen Sans Regular';
    font-size: 16px;
  }
}
</style>
