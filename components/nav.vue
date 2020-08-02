<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="/2020">
          <img src="~assets/icon/verticla logo_blue.png">
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
          <a class="navbar-item" href="#">
            Social
          </a>
          <a class="navbar-item" href="#">
            Contact
          </a>
          <a class="navbar-item" href="#">
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
  height: 2.5rem;
  width: auto;
  margin-left: 2rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item,
.navbar-link {
  font-size: 1rem;
}
.navbar-item img {
  max-height: 10rem;
}
.container {
  background-color: rgba(255,255,255,0.5);
}

 @media (max-width: 768px) {

 }

</style>
