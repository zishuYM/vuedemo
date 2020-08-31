<template>
  <div class="User">
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
    request({url: this.userName}).then(res => {
      this.address = res.data.html_url;
      this.photo = res.data.avatar_url;
      this.descrption = res.data.bio;
    }).catch(err => {console.log(err);})
  },
}
</script>