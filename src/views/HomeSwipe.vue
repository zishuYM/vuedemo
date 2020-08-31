<template>
  <swiper>
    <swiper-item v-for="(item, index) in images" :key="index">
      <img :src="item" alt="" srcset="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../components/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>