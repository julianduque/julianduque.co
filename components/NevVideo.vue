<template>
  <iframe
    :src="url"
    allowfullscreen>
  </iframe>
</template>

<script>
export default {
  props: [ 'url' ]
}
</script>
