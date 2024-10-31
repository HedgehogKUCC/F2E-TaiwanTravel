<template>
  <div>
    <section class="bg-home-banner">
      <div class="py-40 flex justify-center items-center">
        <div class="relative">
          <input type="search" class="w-780 h-14 rounded-3xl focus:outline-none pl-16 pr-6">
          <img src="~/assets/images/search.svg" alt="" class="absolute top-1 left-0 px-5 py-3">
        </div>
      </div>
    </section>
    <div class="pt-20 pb-28 bg-grey-500">
      <section class="container">
        <div class="mb-10 flex justify-center items-center">
          <img src="~/assets/images/lantern.svg" alt="">
          <h3 class="ml-4 text-2xl font-bold">
            精選活動
          </h3>
        </div>
        <div class="flex justify-between items-center">
          <div class="2xl:w-12/25">
            <div class="flex">
              <img src="~/assets/images/activity-1.jpg" alt="">
              <div class="p-5 bg-white">
                <h2 class="mb-6 text-lg font-bold">
                  新北市歡樂耶誕城
                </h2>
                <p class="mb-4">
                  <b class="mr-2">時間</b>2021/11/20-2021/12/30
                </p>
                <p class="mb-4">
                  <b class="mr-2">地點</b>新北市板橋區
                </p>
                <p class="h-22">新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......</p>
                <div class="flex justify-end">
                  <a href="" class="px-8 py-1.5 bg-primary-300 rounded-2xl text-white">活動詳情</a>
                </div>
              </div>
            </div>
          </div>
          <div class="2xl:w-12/25">
            <div class="flex">
              <img src="~/assets/images/activity-2.jpg" alt="">
              <div class="p-5 bg-white">
                <h2>新北市歡樂耶誕城 </h2>
                <p><b>時間</b>2021/11/20-2021/12/30</p>
                <p><b>地點</b>新北市板橋區</p>
                <p>新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......</p>
                <a href="" class="block">活動詳情</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  // head: {
  //   title: '首頁'
  // },
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
