<template>
  <div class="JakeWharton">
    <h1>简易GitHub客户端</h1>
    <h2>{{address}}</h2>
    <img :src="photo">
    <h2>{{descrption}}</h2>
  </div>
</template>

<script>
export default {
  name: 'JakeWharton',
  data() {
    return {
        address: '',
        photo: '',
        descrption: '',
    }
  },

  methods:{
    init(){
      this.$axios({
        url: "https://api.github.com/users/zpao",
        method: "get",
        }).then(res =>{
          console.log(res);
          console.log(res.data.html_url);
          this.address = res.data.html_url;
          this.photo = res.data.avatar_url;
          this.descrption = res.data.bio;
        }
      );
    }
  },

  created(){
    console.log(11111);
    this.init();
  },
}
</script>
