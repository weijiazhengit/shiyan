<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle"
           class="filter"></div>
      <video :style="fixStyle"
             autoplay
             loop
             class="fillWidth"
             v-on:canplay="canplay">
        <source src="../assets/3.mp4"
                type="video/mp4" />
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="poster hidden"
           v-if="!vedioCanPlay">
        <img :style="fixStyle"
             src="../assets/login_bg.jpg"
             alt="">
      </div>
    </div>
    <div class="login_form">
      <h1 class="login_h1">modo登陆页面</h1>
      <el-form ref="login_form"
               :rules="rules"
               :model="login_form">
        <el-form-item prop="username">
          <el-input v-model="login_form.username"
                    prefix-icon="el-icon-user-solid"
                    auto-complete="on"
                    clearable
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="login_form.password"
                    prefix-icon="el-icon-lock"
                    type="password"
                    show-password
                    auto-complete="on"
                    clearable
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <template>
          <div class="btn_class">
            <el-button type="primary"
                       @click="enter()">登录</el-button>
            <el-button @click="enroll()">清空</el-button>
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
      vedioCanPlay: false,
      fixStyle: '',
      login_form: {
        username: "",
        password: "",

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
    canplay () {
      this.vedioCanPlay = true
    },
    enter () {
      this.$refs.login_form.validate(async vilde => {
        console.log(vilde);
        if (!vilde) {
          return this.warning()
        }
        const { data: res } = await this.$axios.get('/login.json')
        window.sessionStorage.setItem("token", res.token)
        this.loginy()
        this.$router.push("/home").catch(() => { })
      })

    },

    enroll () {
      this.$refs.login_form.resetFields()
    },
    loginy () {
      this.$message({
        message: "恭喜你,登陆成功!",
        type: "success"
      })
    },
    warning () {
      this.$message({
        message: "请输入用户名/密码，进行登录！",
        type: "warning"
      })
    }
  },
  mounted () {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  }
};
</script>

<style lang="less" scoped>
.login_h1 {
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 20px;
}
.login_form {
  z-index: 999;
  border: 1px solid #9e9e9e;
  background-color: #ffffff2b;
  display: flex;
  flex-direction: column;
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
.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  -moz-user-select: none; /* Firefox私有属性 */
  -webkit-user-select: none; /* WebKit内核私有属性 */
  -ms-user-select: none; /* IE私有属性(IE10及以后) */
  -khtml-user-select: none; /* KHTML内核私有属性 */
  -o-user-select: none; /* Opera私有属性 */
  user-select: none; /* CSS3属性 */
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  // background: rgba(0, 0, 0, 0.4);
}
</style>
