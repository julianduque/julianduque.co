<template>
  <section>
    <nuxt-link :to="seasonLink">Back</nuxt-link>
    <nev-post
      :title="payload.title"
      :description="payload.description"
      :content="content"
      :slug="payload.slug"
      :image="payload.image"
      :video="payload.video"
      :date="payload.date"
    />
  </section>
</template>

<script>
  import NevPost from '~/components/NevPost.vue'

  export default {
    components: {
      'nev-post': NevPost
    },
    async asyncData({ params, payload }) {
      const { season, slug } = params

      const posts = await import(`~/content/envivo/${season}/posts.json`)
      if (!payload) {
        payload = posts.default.find(p => p.slug === slug)
      }

      const content = await import(`~/content/envivo/${season}/${slug}.md`)
      return {
        seasonLink: `/envivo/${season}`,
        content: content.default,
        payload
      }
    }
  }
</script>
