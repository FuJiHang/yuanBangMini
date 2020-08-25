
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      {
        url:'/image/banner.jpg',
      },
      {
        url:'/image/banner.jpg',
      },
      {
        url:'/image/banner.jpg',
      },
    ],//轮播图
    imgheights: [],//所有图片高度
    current: 0,//轮播图下标
    funList:[
      {
        name:'缴费',
        img:'/image/pay_i.png',
        to:'',
      },
      {
        name:'维修',
        img:'/image/repair_i.png',
        to:'',
      },
      {
        name:'报事',
        img:'/image/report_i.png',
        to:'',
      },
      {
        name:'停车位',
        img:'/image/parking_i.png',
        to:'',
      },
      {
        name:'门岗放行',
        img:'/image/release_i.png',
        to:'',
      },
    ],//功能模块
    epidemic:[
      {
        img:'/image/body_i.png',
        to:'',
      },
      {
        img:'/image/healthy_i.png',
        to:'',
      },
      {
        img:'/image/Access_i.png',
        to:'',
      },
    ],
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
    actions:[
      {
        name:'888888'
      },
      {
        name:'拨号'
      }
    ],//拨号
    show:false,//拨号弹窗显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar() //关闭导航条使用自定义的
  },
  // 隐藏
  onClose(e) {
    this.setData({ [e.currentTarget.dataset.name]: false });
  },
  // 选中拨号
  onSelect(event) {
    console.log(event.detail);
  },

  // 显示
  openFN(e){
    this.setData({
      [e.currentTarget.dataset.name]: true 
    })
  },

  // 新闻切换
  newChange(e){
    this.setData({
      newActive:e.currentTarget.dataset.index
    })
  },


  // 轮播图变化
  imageLoad: function (e) {//获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },
  bindchangeImg: function (e) {
    this.setData({ current: e.detail.current })
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