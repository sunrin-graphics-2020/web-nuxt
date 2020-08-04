<template>
  <footer class="footer columns">
    <div class="column img-box">
      <img src="~assets/icon/horizonlogo.png">
    </div>

    <div class="column text-box">
      <p>선린인터넷고등학교 멀티미디어과</p>
      <p>서울특별시 용산구 원효로97길 33-4</p>
      <p>선린인터넷고등학교 3호관 2층 디자인실습실</p>
      <p>Tel. 713-6213 | Fax. 704-0960</p>
    </div>
    <div class="column text-box is-hidden-mobile">
      <p>졸업준비위원회</p>
      <p>이소월 박정우 권신학 길민종</p>
      <p>이충혁 이성인</p>
      <p>김예경 원지수 김유진 박경서 김도연</p>
      <p style="margin-bottom: 1rem;">
        노민경 김지원 김고은
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 15rem;
  background-color: #808080;
  padding-bottom: 0rem;
  padding-top: 1rem;

  img {
    width: 200px;
    height: auto;
  }
}
.img-box {
  display: flex;
  place-content: center;
  align-items: center;
}
.text-box{
  display: grid;
    place-content: center;
    align-items: center;
}

p {
   font-family:'Carmen Sans Regular';
   color: #FFFFFF;
   font-size: 14px;
}

@media screen and (max-width: 768px) {
    .footer{
  display: flex;
}
p{
  font-size: 12px;
}
  }
</style>
