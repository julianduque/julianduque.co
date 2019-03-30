<template>
  <section class="container content">
    <h1 class="">{{title}}</h1>
    <div v-html="content"></div>
  </section>
</template>

<script>
import posts from '~/content/posts/posts.json'

export default {
  async asyncData ({ params, error, payload }) {
    if (!payload) {
      payload = posts.find(p => p.slug === params.slug)
    }

    const content = await import(`~/content/posts/${params.slug}.md`)
    return {
      content: content.default,
      title: payload.title
    }
  }
}
</script>

<style>

.video-container {
  position: relative;
  padding-bottom: 56.25%; /*16:9*/
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

