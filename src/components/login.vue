<template>
  <div class="login_main">
    <div class="login_form">
      <el-form ref="login_form"
               :rules="rules"
               :model="login_form">
        <el-form-item prop="username">
          <el-input v-model="login_form.username"
                    clearable
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="login_form.password"
                    type="password"
                    show-password
                    clearable
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <template>
          <div class="btn_class">
            <el-button type="primary"
                       @click="enter()">登录</el-button>
            <el-button @click="enroll()">注册</el-button>
          </div>
        </template>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login_form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async enter () {
      const { data: res } = await this.$http.get('example/1616391901012')
      window.localStorage.setItem("token", res.token);
      this.loginy()
      this.$router.push("/home").catch(() => { })
    },
    enroll () {
      console.log(456);
    },
    loginy () {
      this.$message({
        message: "恭喜你,登陆成功!",
        type: "success"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.login_main {
  height: 100vh;
  -moz-user-select: none; /* Firefox私有属性 */
  -webkit-user-select: none; /* WebKit内核私有属性 */
  -ms-user-select: none; /* IE私有属性(IE10及以后) */
  -khtml-user-select: none; /* KHTML内核私有属性 */
  -o-user-select: none; /* Opera私有属性 */
  user-select: none; /* CSS3属性 */
}
.login_form {
  border: 1px solid #9e9e9e;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px #9e9e9e;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .btn_class {
    display: flex;
    align-content: center;
    justify-content: center;
  }
}
</style>
