<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="/2020">
          <img src="~assets/icon/paran_logo.png">
        </a>
        <div
          :class="{ 'is-active': showNav }"
          data-target="navMenu"
          class="navbar-burger burger"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div id="navMenu" :class="{ 'is-active': showNav }" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="/2020/social">
            Social
          </a>
          <a class="navbar-item" href="/2020/contact">
            Contact
          </a>
          <a class="navbar-item" href="/2020/exhibition">
            Exhibition
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style scope>
.container {
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.navbar-item img {
  height: 3rem;
  width: auto;
  margin-left: 2rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item {
  font-size: 1rem;
  color: #293682;
  font-family:'Carmen Sans Regular';
}
.navbar-item img {
  max-height: 10rem;
}

@media screen and (max-width: 768px) {
  .container {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .navbar-item img {
      height: 1.5rem;
    }
  }

</style>
