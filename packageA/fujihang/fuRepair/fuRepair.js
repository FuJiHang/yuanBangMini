// packageA/fujihang/fuRepair/fuRepair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
        name: '报修人',
        val: '王鸿',
        plr: '请输入报修人姓名',
        data: '',
        txt: '',
        type: 'text'
      },
      {
        name: '电话',
        val: '13322228888',
        plr: '请输入报修人电话',
        data: '',
        txt: '',
        type: 'number'
      },
    ],
    showDate: false, //显示时间年月日弹窗
    showTime:false,//显示时间时分弹窗
    value1: new Date().getTime(), //年月日时间
    detail:'',//维修详情
  },

  //获取时间
  onConfirm(e) {
    const {
      index,
      mode
    } = e.currentTarget.dataset
    this.setValue(e.detail, index, mode)
    console.log(`onConfirm${index}`, e.detail)
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible
    })
  },
  setValue(values, key, mode) {
    this.setData({
      [`value${key}`]: values.value,
      [`displayValue${key}`]: values.label,
      // [`displayValue${key}`]: values.displayValue.join(' '),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 
  inputFN(e) {

    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value
    })
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