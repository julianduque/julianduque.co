<template>
  <section class="container">
    <h1 class="title">{{ seasonTitle }}</h1>
    <div :key="post.slug" v-for="post in posts">
      <nev-preview
        :title="post.title"
        :slug="post.slug"
        :image="post.image"
        :date="post.date"
        :description="post.description"
      />
    </div>
  </section>
</template>

<script>
import seasons from '~/content/envivo/seasons.json'
import NevPreview from '~/components/NevPreview.vue'

export default {
  components: {
    'nev-preview': NevPreview
  },
  async asyncData ({ params }) {
    const { season, slug } = params
    const seasonMeta = seasons.find(s => s.slug === season)
    const posts = await import(`~/content/envivo/${season}/posts.json`)
    return {
      seasonTitle: seasonMeta.title,
      posts: posts.default.map(p => {
        return {
          title: p.title,
          description: p.description,
          image: `/images/${p.image}`,
          slug: `/envivo/${season}/${p.slug}`,
          date: p.date
        }
      })
    }
  }
}
</script>

