<template>
  <section class="section">
    <nav-bar />
    <div class="container">
      <nuxt />
    </div>
    <page-footer />
  </section>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    'nav-bar': NavBar,
    'page-footer': Footer
  }
}
</script>
