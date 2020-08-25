// packageA/fujihang/fuPay/fuPay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    funActive: 3, //选中的功能
    funList: [{
        name: '当前未缴',
      },
      {
        name: '费用预存',
      },
      {
        name: '历史缴费',
      },
      {
        name: '我的发票',
      },
    ], //功能列表
    payOrOder: [{
        name: '待缴纳费用',
        data: [],
        post: '',
        page: 1,
        finsh: false,
      },
      {
        name: '待支付订单',
        data: [],
        post: '',
        page: 1,
        finsh: false,
      },
    ], //当前未缴
    pOrOActive: 0, //选中的功能(当前未缴)
    chooseTime: [
      '2020 - 1 - 1',
      '2020 - 6 - 1'
    ], //历史缴费时间选则
    invoice: [{
        name: '待开发票',
        data: [],
        post: '',
        page: 1,
        finsh: false,
      },
      {
        name: '已开发票',
        data: [],
        post: '',
        page: 1,
        finsh: false,
      },
    ], //我的发票
    invoiceAcive: 0, //我的发票选中
    currentDate: new Date().getTime(),
    timeLJ: new Date().getTime(), //时间改变
    showTime: false, //显示选择时间器
    value1: new Date().getTime(), //年月日时间
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

  // 关闭
  closeFN(e) {
    this.setData({
      [e.currentTarget.dataset.name]: false
    })
  },

  // 打开
  openFN(e) {
    this.setData({
      [e.currentTarget.dataset.name]: true
    })
  },
  // 选中的功能
  funFN(e) {
    this.setData({
      funActive: e.currentTarget.dataset.index,
    })
  },


  // 当前未缴
  POChange(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.index
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