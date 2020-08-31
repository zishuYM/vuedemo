<template>
  <div id="app">
    <router-view/>
    <div id="nav"> 
      <router-link to="/Home" tag="button">Home</router-link> |
      <router-link to="/about" tag="button">关注页</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'APP',

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

#nav {
  padding: 30px;

//   a {
//   font-weight: bold;
//   color: #2c3e50;

//   &.router-link-exact-active {
//     color: #42b983;
//   }
// }
}
</style>
