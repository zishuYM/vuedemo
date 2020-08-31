<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
    text-align: center;
  }

  .slide img {
    width: 100%;
    text-align: center;
  }
</style>
