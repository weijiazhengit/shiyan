<template>
  <div>
    <el-container class="container">
      <el-header height="80px">
        <el-row :gutter="10"
                type="flex"
                justify="end">
          <el-col :span="6"
                  style=" text-align : end; margin-right: 20px;">
            <span>欢迎你 ！ {{$store.state.username}}</span>
          </el-col>
          <el-col :span="2">
            <el-button type="warning "
                       @click="out()">退出</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>

        <el-aside :width="isCollapse ? '64px' : '170px'">
          <template>
            <div class="collapse"
                 @click="collapse">
              <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold' "></i>
            </div>
          </template>
          <el-menu :default-active="$router.path"
                   background-color="#333744"
                   text-color="#fff"
                   active-text-color="#ffd04b"
                   router
                   :unique-opened="true"
                   :collapse="isCollapse"
                   :collapse-transition="false">
            <el-submenu index="/list">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">列表</span>
              </template>
              <el-menu-item index="/list">列表</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <!-- <el-select v-model="value"
                     placeholder="请选择"
                     @change="cut(value)">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <video id="myVideo"
                 width="800"
                 height="600"
                 class="video-js vjs-default-skin vjs-big-play-centered">
            <source>
          </video>

          <div class="a">
            异常台面
          </div> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      options: [{
        value: 'CCTV1高清',
        label: 'CCTV1高清'
      }, {
        value: 'CCTV3高清',
        label: 'CCTV3高清'
      }, {
        value: 'CCTV6高清',
        label: 'CCTV6高清'
      }, {
        value: '海洋',
        label: '海洋'
      }],
      value: ''
    }
  },
  mounted () {
    // this.initVideo();
  },
  methods: {
    initVideo () {
      //初始化视频方法
      var myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "true",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        preload: "none",
        sources: [
          {
            src: 'http://ivi.bupt.edu.cn/hls/cctv4hd.m3u8',
            type: 'application/x-mpegURL'
          },
        ],

      });
    },
    cut (channel) {
      var myPlayer = this.$video(myVideo)
      console.log(myPlayer);
      myPlayer.reset();//重置
      if ("CCTV1高清" == channel) {	//CCTV1
        myPlayer.src({ type: "application/x-mpegURL", src: "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" });
        myPlayer.load("http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8");
        myPlayer.play();
      } else if ("CCTV3高清" == channel) {	//CCTV3
        myPlayer.src({ type: "application/x-mpegURL", src: "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8" });
        myPlayer.load("http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8");
        myPlayer.play();
      } else if ("CCTV6高清" == channel) {	//CCTV6
        myPlayer.src({ type: "application/x-mpegURL", src: "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8" });
        myPlayer.load("http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8");
        myPlayer.play();
      } else if ("海洋" == channel) {	//香港卫视
        myPlayer.src({ type: "rtmp/flv", src: "rtmp://live.hkstv.hk.lxdns.com/live/hks1" });
        myPlayer.load("rtmp://live.hkstv.hk.lxdns.com/live/hks1");
        myPlayer.play();
      }
    },
    out () {
      this.$message({
        message: "已退出该账户",
        type: "warning"
      })
      window.localStorage.removeItem('token');
      this.$router.push("/login").catch(() => { })
      // window.location.reload();
    },
    a () {
      if (window.localStorage.token) {
        this.$store.dispatch('axiosadduser', window.localStorage.token)
      }
    },
    collapse () {
      this.isCollapse = !this.isCollapse
    },
    tokenchange (e) {
      console.log(e);
      this.$store.commit("tokenchange", e)
    }
  },
  created () {
    this.a()
  },
}
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  -moz-user-select: none; /* Firefox私有属性 */
  -webkit-user-select: none; /* WebKit内核私有属性 */
  -ms-user-select: none; /* IE私有属性(IE10及以后) */
  -khtml-user-select: none; /* KHTML内核私有属性 */
  -o-user-select: none; /* Opera私有属性 */
  user-select: none; /* CSS3属性 */
}
.el-header {
  // background-color: #b3c0d1;
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
  line-height: 80px;
  background-image: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=947212500,3732940939&fm=26&gp=0.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
}
.video-js .vjs-big-play-button {
  font-size: 2.5em;
  line-height: 2.3em;
  height: 2.5em;
  width: 2.5em;
  -webkit-border-radius: 2.5em;
  -moz-border-radius: 2.5em;
  border-radius: 2.5em;
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5);
  border-width: 0.15em;
  margin-top: -1.25em;
  margin-left: -1.75em;
}
/* 中间的播放箭头 */
.vjs-big-play-button .vjs-icon-placeholder {
  font-size: 1.63em;
}
/* 加载圆圈 */
.vjs-loading-spinner {
  font-size: 2.5em;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  margin-top: -1em;
  margin-left: -1.5em;
}
.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started .vjs-big-play-button {
  display: block;
}

.collapse {
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
}
/deep/.el-submenu .el-menu-item {
  min-width: 169px !important;
}
</style>