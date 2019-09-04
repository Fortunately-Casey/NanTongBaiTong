<template>
  <div class="hello">
    <div class="tree" @click="goToOldTree">古树林木</div>
    <div class="phone-number">
      <div class="left">电话:</div>
      <input class="right" :value="mobile" />
    </div>
    <div class="phone-number">
      <div class="left">备注:</div>
      <input class="right" v-model="remark" />
    </div>
    <div class="image">
      <div class="left">选择图片:</div>
      <form>
        <input
          type="file"
          accept="image/*"
          id="capture"
          capture="camera"
          class="right"
          ref="imageFile"
          @change="getFile($event)"
        />
      </form>
    </div>
    <div class="confirm" @click="confirm">确定</div>
  </div>
</template>
<script>
import { TextAndImage } from "@/api/init.js";
export default {
  name: "Home",
  props: {
    mobile: {
      type: String,
      default: ""
    },
    openId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      remark: "",
      file: ""
    };
  },
  methods: {
    goToOldTree() {
      window.location.href = "http://www.ntschy.com:8488/TreeAll.html";
    },
    confirm() {
      var vm = this;
      let formData = new FormData();
      formData.append("remark", vm.remark);
      formData.append("mobile", vm.mobile);
      formData.append("openId", vm.openId);
      formData.append('file',this.file);
      // TextAndImage({
      //   remark:vm.remark,
      //   mobile:vm.mobile,
      //   openId:vm.openId
      // }).then((resp) => {
      //   console.log(resp);
      // })
      TextAndImage(formData).then(resp => {
        console.log(resp);
        if(resp.data.msg == 'success') {
          alert('成功！');
        }else {
          alert('失败！');
        }
      });
    },
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  .tree {
    height: 50px;
    color: #ffcd32;
    font-size: 16px;
    border: 1px solid #ffcd32;
    border-radius: 5px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .phone-number,
  .image {
    height: 50px;
    .left {
      color: #fff;
      float: left;
    }
    .right {
      float: left;
      margin-left: 20px;
      width: 200px;
    }
  }
  .confirm {
    width: 100px;
    height: 40px;
    border-radius: 6px;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    color: #000;
    margin: 0 auto;
  }
}
</style>
