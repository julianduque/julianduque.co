<template>
  <section>
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
  import posts from "~/content/envivo/posts.json";
  import NevPost from "~/components/NevPost.vue";

  export default {
    components: {
      "nev-post": NevPost
    },
    async asyncData({ params, payload }) {
      if (!payload) {
        payload = posts.find(p => p.slug === params.slug);
      }

      const content = await import(`~/content/envivo/${params.slug}.md`);
      return {
        content: content.default,
        payload
      };
    }
  };
</script>
