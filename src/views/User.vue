<template>
  <div class="zpao">
    <h1>简易GitHub客户端</h1>
    <h2>{{address}}</h2>
    <img :src="photo">
    <h2>{{descrption}}</h2>
  </div>
</template>

<script>
import {request} from "../network/index"

export default {
  name: 'User',
  data() {
    return {
        address: '',
        photo: '',
        descrption: '',
    }
  },
  computed: {
      userName() {
          return this.$route.params.userName
      },
      
  },

  created(){
    console.log(11111);
    // this.$axios({
    //     url: "https://api.github.com/users/" + this.userName,
    //     method: "get",
    //     }).then(res =>{
    //       console.log(res);
    //       console.log(res.data.html_url);
    //       this.address = res.data.html_url;
    //       this.photo = res.data.avatar_url;
    //       this.descrption = res.data.bio;
    //     }
    //   );

    // request({
    //   url: this.userName
    // }, res=> { console.log(res);
    //   this.address = res.data.html_url;
    //   this.photo = res.data.avatar_url;
    //   this.descrption = res.data.bio;
    // }, err => {console.log(err);})

    request({url: this.userName}).then(res => {
      this.address = res.data.html_url;
      this.photo = res.data.avatar_url;
      this.descrption = res.data.bio;
    }).catch(err => {console.log(err);})
  },
}
</script>