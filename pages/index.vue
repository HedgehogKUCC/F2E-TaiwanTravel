<template>
  <div>
    <section class="bg-home-banner">
      <div class="py-40 flex justify-center items-center">
        <div class="relative">
          <input type="search" class="w-780 h-14 rounded-3xl">
          <img src="~/assets/images/search.svg" alt="" class="absolute top-1 left-0 px-5 py-3">
        </div>
      </div>
    </section>
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
