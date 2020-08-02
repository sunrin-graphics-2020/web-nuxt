<template>
  <div>
    <navbar />
    <Nuxt />
    <footerbar />
  </div>
</template>

<script>
import navbar from '@/components/nav'
import footerbar from '@/components/footer'
export default {
  components: { navbar, footerbar }
}
</script>
