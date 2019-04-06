<template>
  <section class="container">
    <h1 class="title">Node.js ¡En Vivo!</h1>
    <div :key="season.slug" v-for="season in seasons">
      <nuxt-link :to="season.link">{{ season.title }}</nuxt-link>
    </div>
  </section>
</template>

<script>
import seasons from '~/content/envivo/seasons.json'

export default {
  components: {
  },
  data () {
    return {
      seasons: seasons.map(season => Object.assign(season, { link: `/envivo/${season.slug}` }))
    }
  }
}
</script>

