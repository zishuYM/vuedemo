<template>
  <div>
    <!-- <img src="../assets/logo.png"> -->
    <!-- <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe> -->
    <home-swiper :images = 'images'></home-swiper>
  </div>
</template>

<script>

import HomeSwiper from './HomeSwipe'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
  },
  data(){
    return{
      images:[
        require('../assets/swiper1.jpg'),
        require('../assets/swiper2.jpg'),
      ]
    }
  }
}
</script>

<style>

</style>
