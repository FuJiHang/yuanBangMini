// pages/fujihang/fuMy/fuMy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newStar:[
      {
        name:'我的消息',
        img:'/image/new_m.png'
      },
      {
        name:'我的积分',
        img:'/image/integ_m.png'
      },
      {
        name:'家庭成员',
        img:'/image/house_m.png'
      },
    ],//
    parkLot:[
      {
        name:'我的车位',
        img:'/image/chewei_m.png'
      },
      {
        name:'车位出租',
        img:'/image/chuzhu_m.png'
      },
      {
        name:'车位转卖',
        img:'/image/zhuangmai_m.png'
      },
    ],
    myTool:[
      {
        name:'我的合同',
        img:'/image/contract_m.png',
      },
      {
        name:'我的发布',
        img:'/image/release_m.png',
      },
      {
        name:'我的活动',
        img:'/image/activity_m.png',
      },
    ],// 我的工具
    otherFun:[
      {
        name:'我的报修',
        img:'/image/repair_m.png'
      },
      {
        name:'我的报事',
        img:'/image/report_m.png'
      },
      {
        name:'放行记录',
        img:'/image/fangxing_m.png'
      },
      {
        name:'建议/反馈',
        img:'/image/feedback_m.png'
      },
      {
        name:'捐赠查询',
        img:'/image/donat_m.png'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar() //关闭导航条使用自定义的
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