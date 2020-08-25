// components/fujihang/fuTabbar/fuTabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList:[
      {
        name:'首页',
        url:'/image/index.png',
        urlA:'/image/index_b.png',
        to:'/pages/fujihang/fuIndex/fuIndex'
      },
      {
        name:'服务',
        url:'/image/serve.png',
        urlA:'/image/serve_b.png',
        to:'/pages/fujihang/fuServe/fuServe'
        
      },
      {
        name:'我的',
        url:'/image/my.png',
        urlA:'/image/my_b.png',
        to:'/pages/fujihang/fuMy/fuMy'
      },
    ],

  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toFN(e){
      wx.switchTab({
        url:e.currentTarget.dataset.url
      })
    },
  }
})
