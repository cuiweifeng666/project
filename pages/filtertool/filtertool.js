// pages/filtertool/filtertool.js
var list;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '全国彩种',
      headOff: 'true',
      titleTrue: false,
      headRightTitle: '奇偶质和比走势图',
    },
    head2: {
      title: '高频彩种',
      headOff: 'true',
      titleTrue: false,
      headRightTitle: '奇偶质和比走势图',
    },
    title:
      {
      one: [
        {name:'3D/排三过滤',
        imgurl: "../../web/images/gv_icon1.png",
        tourl: "../fc3dfilter/fc3dfilter?type=3d",
        },
        {
          name: '排五过滤',
          imgurl: "../../web/images/gv_icon1.png",
          tourl: "../rwfilter/rwfilter?type=3d",
        },
        {
          name: '双色球过滤',
          imgurl: "../../web/images/gv_icon1.png",
          tourl: "../fc3dfilter/fc3dfilter?type=3d",
        },
        {
          name: '大乐透过滤',
          imgurl: "../../web/images/gv_icon1.png",
          tourl: "../fc3dfilter/fc3dfilter?type=3d",
        },
      ],
      two: [
        {
          name: '11选5前二过滤',
          imgurl: "../../web/images/gv_icon1.png",
          tourl: "../fc3dfilter/fc3dfilter?type=3d",
        },
        {
          name: '11选5前三过滤',
          imgurl: "../../web/images/gv_icon1.png",
          tourl: "../fc3dfilter/fc3dfilter?type=3d",
        },
        {
          name: '11选5任五过滤',
          imgurl: "../../web/images/gv_icon1.png",
          tourl: "../fc3dfilter/fc3dfilter?type=3d",
        },
        {
          name: '时时彩过滤',
          imgurl: "../../web/images/gv_icon1.png",
          tourl: "../fc3dfilter/fc3dfilter?type=3d",
        },
      ]
      }
    ,
    list:{
      "data":[
           {
             id:"01",
             imgurl: "../../web/images/gv_icon1.png",
             tourl: "../fc3dfilter/fc3dfilter?type=3d",
             title: "3D号码过滤"
           },
           {
             id: "02",
             imgurl: "../../web/images/gv_icon2.png",
            //  tourl: "https://tools.m.cjcp.com.cn/#&pages/fc3dfilter.html",
            tourl:"../fc3dfilter/position/position",
             title: "排三号码过滤"
           },
           {
             id: "03",
             imgurl: "../../web/images/gv_icon3.png",
             tourl: "../ssqfilter/ssqfilter",
             title: "双色球号码过滤"
           },
           {
             id: "04",
             imgurl: "../../web/images/gv_icon4.png",
             tourl: "../dltfilter/dltfilter",
             title: "大乐透号码过滤"
           },
           {
             id: "05",
             imgurl: "../../web/images/gv_icon5.png",
             tourl: "../qefilter/qefilter",
             title: "11选5前二号码过滤"
           },
           {
             id: "06",
             imgurl: "../../web/images/gv_icon5.png",
             tourl: "../qsfilter/qsfilter",
             title: "11选5前三号码过滤"
           },
           {
             id: "07",
             imgurl: "../../web/images/gv_icon5.png",
             tourl: "../rwfilter/rwfilter",
             title: "11选5任五号码过滤"
           }
      ]
    }  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.setStorageSync('fc5', []);
      wx.setStorageSync('dbc', []);
      wx.setStorageSync('happy', []);
      wx.setStorageSync('ch2', []);
      wx.setStorageSync('ch5', []);
      wx.setStorageSync('cha5', []);
      wx.setStorageSync('timeHappy', []);
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