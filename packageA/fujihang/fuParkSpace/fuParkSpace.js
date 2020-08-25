// packageA/fujihang/fuParkSpace/fuParkSpace.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [{
        url: '/image/banner.jpg',
      },
      {
        url: '/image/banner.jpg',
      },
      {
        url: '/image/banner.jpg',
      },
    ], //轮播图
    imgheights: [], //所有图片高度
    current: 0, //轮播图下标
    newActive: 0, //显示消息的下标
    newList: [{
        name: '车位转卖',
        post: 0,
        data: [],
        page: 1,
        finsh: false,
      },
      {
        name: '闲置出租',
        post: 0,
        data: [],
        page: 1,
        finsh: false,
      },
    ], //消息列表集合
  },
  // 轮播图变化
  imageLoad: function (e) { //获取图片真实宽度  
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
    this.setData({
      current: e.detail.current
    })
  },


  // 新闻切换
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