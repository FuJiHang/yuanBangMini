// packageA/fujihang/fuComPhone/fuComPhone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
      {
        name:'社区办公室电话',
        phone:'020-22224444',
        val:'周一至周五  上午 8:00 - 下午5:30',
        val2:'周六、周日及节假日休息'
      },
      {
        name:'24小时社区服务热线',
        phone:'020-33336666',
        val:''
      },
    ],//社区电话
    pcs:[
      {
        name:'广州市花都区派出所',
        phone:'',
        data:[
          {
            name:'广州市花都山前大道1242号',
            val:'/image/address_c.png'
          },
          {
            name:'上午9:00 - 下午5:00',
            val2:'下午13:30 - 17:30',
            val3:'周一至周五',

            val:'/image/time_c.png'
          },
        ]
      },
      {
        name:'联系电话',
        phone:'020-66668888',
        data:[]
      },
    ],//派出所
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