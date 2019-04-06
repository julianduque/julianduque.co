<template>
  <nuxt-link :to="slug">
    <article class="media">
      <figure class="media-left">
        <p class="image is-128x128">
          <img :src="image" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <strong>{{ title }}</strong>
          <p>{{ description }}</p>
          <small>{{ date }}</small>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: [ 'title', 'slug', 'image', 'description', 'date' ]
}
</script>

