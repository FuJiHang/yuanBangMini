// packageA/fujihang/fuParkRental/fuParkRental.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList: [{
        name: '姓名',
        plr: '请填写租用人姓名',
        val: '',
        type: "text",
      },
      {
        name: '身份证号',
        plr: '请填写正确车牌号',
        val: '',
        type: "number",
      },
      {
        name: '租用时间',
        val: 0,
      },
      {
        name: '车牌号',
        plr: '请填写正确车牌号',
        val: '',
        type: "text",
      },
      {
        name: '选择车位',
        val: '1栋 A102',
      },
      {
        name: '电话',
        plr: '请填写电话号码',
        val: '',
        type: "number",
      },
    ],//请求数据
    chooseList: [{
        name: '6个月',
        pri: '1800元',
        val: '折合300元/月',
      },
      {
        name: '12个月',
        pri: '3200元',
        val: '折合267元/月',
      },
      {
        name: '24个月',
        pri: '6000元',
        val: '折合250元/月',
      },
    ],//租赁类型
    funList:[
      '1栋','2栋'
    ],//栋数
    funActive:0,//选择的栋数
    showPark:false,
    showTip:true,//显示弹窗
  },

  // 
  funFN(e){
    
    this.setData({
      funActive:e.currentTarget.dataset.index
    })
  },
  // 
  inputFN(e) {
    this.setData({
      [e.currentTarget.datase.name]: e.detail.value
    })
  },

  chooseFN(e){
    this.setData({
      ['postList[2].val']:e.currentTarget.dataset.index
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