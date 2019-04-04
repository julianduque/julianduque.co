<template>
  <section class="container">
    <h1 class="title">Node.js ¡En Vivo!</h1>
    <div :key="post.slug" v-for="post in posts">
      <nev-preview
        :title="post.title"
        :slug="post.slug"
        :image="post.image"
        :description="post.description"
      />
    </div>
  </section>
</template>

<script>
import NevPreview from '~/components/NevPreview.vue'
import posts from '~/content/envivo/posts.json'

export default {
  components: {
    'nev-preview': NevPreview
  },
  data: function () {
    return {
      posts: posts.map(p => {
        return {
          title: p.title,
          description: p.description,
          image: `/images/${p.image}`,
          slug: `/envivo/${p.slug}`
        }
      })
    }
  }
}
</script>

