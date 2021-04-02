<template>
  <div>
    <el-select v-model="value"
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
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    this.initVideo();
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
  },
}
</script>

<style lang="less" scoped>
</style>