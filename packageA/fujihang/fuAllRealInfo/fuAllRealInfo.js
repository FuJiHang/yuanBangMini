// packageA/fujihang/fuAllRealInfo/fuAllRealInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus:false,
    newActive:0,//显示消息的下标
    newList:[
      {
        name:'实时资讯',
        post:0,
        data:[],
        page:1,
        finsh:false,
      },
      {
        name:'最新楼盘',
        post:0,
        data:[],
        page:1,
        finsh:false,
      },
    ],//消息列表集合
  },

  // 新闻切换
  newChange(e){
    this.setData({
      newActive:e.currentTarget.dataset.index
    })
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