<template>
  <div>
    <h1 v-if="error.statusCode === 404" class="container text-red-500 text-7xl text-center">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <NuxtLink to="/" class="container bg-primary-500 text-white p-3 mt-2 rounded flex justify-center items-center">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'errorLayout',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
