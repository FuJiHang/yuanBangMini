// packageA/fujihang/fuRelease/fuRelease.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseList:[
      {
        name:'探访'
      },
      {
        name:'公事'
      },
      {
        name:'外卖'
      },
      {
        name:'包裹'
      },
    ],//目的
    listDet:[
      {
        name:'人数',
        val:'2人',
      },
      {
        name:'预约时间',
        val:'2020-5-5  12:30',
      },
      {
        name:'目的',
        val:'探访',
      },
    ],
    choose:0,//类型
    showCode:false,//显示验证码弹窗

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})