<template>
  <div class="content" v-html="about"></div>
</template>

<script>
import about from '~/content/about.md'

export default {
  computed: {
    about () {
      return about
    }
  }
}
</script>
