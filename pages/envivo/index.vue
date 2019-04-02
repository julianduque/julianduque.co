<template>
  <section>
    <ul>
      <li :key="post.slug" v-for="post in posts">
        <nuxt-link :to="post.slug">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import posts from '~/content/envivo/posts.json'

export default {
  data: function () {
    return {
      posts: posts.map(p => {
        return {
          title: p.title,
          slug: `/envivo/${p.slug}`
        }
      })
    }
  }
}
</script>

