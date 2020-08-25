// packageA/fujihang/fuMyNew/fuMyNew.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    funtianList: [{
        name: '获赞',
        val: 2,
        data: '',
      },
      {
        name: '收到评论',
        val: 2,
        data: '',
      },
      {
        name: '参与活动',
        val: 2,
        data: '',
      },

    ], //功能
    newActive: 1,
    newList: [{
        name: '我的动态',
        post: 0,
        data: [],
        page: 1,
        finsh: false,
      },
      {
        name: '点赞',
        post: 0,
        data: [],
        page: 1,
        finsh: false,
      },
      {
        name: '评论',
        post: 0,
        data: [],
        page: 1,
        finsh: false,
      },
    ]
  },
  // 信息切换
  newChange(e) {
    this.setData({
      newActive: e.currentTarget.dataset.index
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