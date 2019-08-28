<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
<script>
import { GetInitCode, GetAuthCode } from "@/api/init"
export default {
  name: 'App',
  created() {
    this._getInitCode();
    this._getAuthCode();
    
  },
  methods:{
    _getInitCode() {
      GetInitCode({
      }).then((resp) => {
        if(resp.data.msg === 'success'){
          let initCode = resp.data.initCode
          sc.config({
            debug: false,
            appId: '3f9cbb3f498b4ac0be0045b7e54994a7',  
            initCode
          })
        } 
      })
    },
    _getAuthCode() {
      GetAuthCode().then((resp) => {
        console.log('authCode',resp)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
