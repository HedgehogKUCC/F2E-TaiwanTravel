<template>
  <div>
    <h1>{{ name }} !!!</h1>
    <button type="button" class="border px-2 py-3 rounded bg-primary-300 shadow-md hover:bg-primary-500 hover:text-white" @click="triggerError500">
      Trigger 500 error
    </button>
  </div>
</template>

<script>
export default {
  // middleware (context) {
  //   console.log(context, 'middleware')
  // },
  asyncData (context) {
    // console.log(context)
    return { name: 'Hello World ~~~', title: '首頁 - 台灣旅遊景點導覽' }
  },
  head () {
    return {
      title: this.title
    }
  },
  created () {
    this.$hello('world')
  },
  methods: {
    triggerError500 () {
      this.$axios.$get('/api/error500')
    }
  }
}
</script>
