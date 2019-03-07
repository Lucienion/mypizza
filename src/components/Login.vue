<template>
  <div class="login container text-center mt-5">
    <img src="../assets/logo.png" width="150">
    <h3>登录</h3>
    <form action>
      <div class="form-group">
        <input
          type="emali"
          class="form-control"
          id="input1"
          v-model="username"
          placeholder="请输入邮箱来登录"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="input2"
          v-model="password"
          placeholder="请输入您的密码"
        >
      </div>
      <button type="submit" @click.prevent="onSub" class="btn btn-primary btn-block">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSub() {
      axios.get("./user-lhy.json").then(res => {
        console.log(res.data);
        var result = [];
        for (var key in res.data) {
          var user = res.data[key];
          result.push(user);
        }
        console.log(result);
        var trueUser = result.filter(user => {
          return (
            user.username === this.username && user.password === this.password
          );
        });
        if (trueUser != null && trueUser.length > 0) {
          alert("登陆成功");
          this.$router.push("/admin");
        } else {
          alert("账号或密码错误");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control {
  width: 500px;
}
.btn-block {
  width: 107%;
}
.login {
  width: 500px;
  margin: 0 auto;
}
</style>
