// packageA/fujihang/fuMyInvoice/fuMyInvoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseList:[
      '个人发票',
      '企业发票'
    ],
    postList:[
      {
        name:'发票详情',
        data:[
          {
            name:'姓名',
            val:'',
            plr:'请填写个人姓名',
            txt:'',
          },
          {
            name:'开票金额',
            val:'',
            plr:'请填写开票金额',
            txt:'',
          },
          {
            name:'开票内容',
            val:'',
            plr:'请填写开票内容',
            txt:'',
          },
        ],
      },
      {
        name:'接收方式',
        data:[
          {
            name:'邮箱',
            val:'',
            plr:'用于向您发送电子发票',
            txt:'',
          },
          {
            name:'电话(选填)',
            val:'',
            plr:'请填写联系电话',
            txt:'',
          },
          {
            name:'地址(选填)',
            val:'',
            plr:'请填写联系地址',
            txt:'',
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