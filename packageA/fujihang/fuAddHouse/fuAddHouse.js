// packageA/fujihang/fuAddHouse/fuAddHouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: [{
        name: '房产详情',
        data: [{
            name: '房号',
            val: '',
            plr: '请填写房号',
            txt: '',
          },
          {
            name: '姓名',
            val: '',
            plr: '请填写姓名',
            txt: '',
          },
          {
            name: '证件号(选填)',
            val: '',
            plr: '请填写个人证件号',
            txt: '',
          },
        ],
      },
      {
        name: '选择您的身份',
        data: [{
            name: '业主',
          },
          {
            name: '家人',
          },
          {
            name: '租户',
          },

        ],
      },
    ]
  },


    // 
    inputFN(e){
      this.setData({
        [e.currentTarget.datase.name]:e.detail.value
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