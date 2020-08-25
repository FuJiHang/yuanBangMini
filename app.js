
const postUrl='' //请求的url
const postImg='' //请求的imgurl
const updateManager = wx.getUpdateManager() //更新小程序



App({

  // 更新小程序
  upDataXIC(){
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
  },




  onLaunch: function () {

    this.upDataXIC() //更新小程序
  },


  globalData: {
    userInfo: null
  }
})