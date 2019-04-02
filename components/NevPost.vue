<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{date}}</p>
    <p>{{description}}</p>
    <img :src="imageUrl" />
    <nev-video :url="video" />
    <div v-html="content" class="content"></div>
  </section>
</template>

<script>
import NevVideo from "~/components/NevVideo.vue"

export default {
  props: [
    'title',
    'description',
    'slug',
    'content',
    'image',
    'video',
    'date'
  ],
  data: function () {
    return {
      imageUrl: `/images/${this.image}`
    }
  },
  components: {
    'nev-video': NevVideo
  }
}
</script>
