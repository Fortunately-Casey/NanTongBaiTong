<template>
  <div id="app">
    <m-header></m-header>
    <m-home :mobile="mobile" :openId="openId"></m-home>
  </div>
</template>
<script>
import { GetInitCode, GetUserInfo } from "@/api/init";
import MHeader from "./components/header/Header";
import MHome from "./components/home/Home";
export default {
  name: "App",
  data() {
    return {
      mobile:'',
      openId:''
    }
  },
  created() {
    this._getInitCode();
  },
  methods: {
    _getInitCode() {
      var vm = this;
      GetInitCode({}).then(resp => {
        if (resp.data.msg === "success") {
          let initCode = resp.data.initCode;
          if (!initCode) return;
          sc.config({
            debug: false,
            appId: "3f9cbb3f498b4ac0be0045b7e54994a7",
            initCode
          });
          sc.ready(() => {
            console.log('111');
            sc.userAuth({ appId: "3f9cbb3f498b4ac0be0045b7e54994a7" }, res => {
              if (res.code === 0) {
                const requestCode = res.data.requestCode;
                let params = new URLSearchParams();
                params.append("requestCode", requestCode);
                GetUserInfo(params).then(resp => {
                  console.log(resp);
                  vm.mobile = resp.data.mobile;
                  vm.openId = resp.data.openId;
                });
              } else {
                /*  */
                /*
                  用户拒绝授权或其它失败情况
                  code: -1 默认失败
                  code: -10001    没有初始化JSSDK
                  code: -10002    用户点击拒绝授权
                  code: -10003    用户未登录
               */
                if (res.code === -1) {
                  console.log("失败！");
                } else if (res.code === -10001) {
                  console.log("没有初始化JSSDK");
                } else if (res.code === -10002) {
                  console.log("用户点击拒绝授权！");
                } else if (res.code === -10003) {
                  console.log("用户未登录！");
                }
              }
            });
          });
          sc.error(res => {
            console.log({ res });
          });
        }
      });
    }
  },
  components: {
    MHeader,
    MHome
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #222;
  height: 100%;
}
</style>
