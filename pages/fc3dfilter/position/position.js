// pages/fc3dfilter/position/position.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kj:'',
     head: {
      title:'定位',
      headOff: 'true',
      titleTrue:'false',
      headRightTitle:'定位走势图',
      headLinkUrl: '../attr/attr?type=3d'
      },
     question: {
       off: false,
       title: '定位',
       content: '分别定位百十个位胆码，过滤出的若干注号码，例：百位选1等，十位选2、9等，个位选3、5、6等，开奖号为123，则百位开1（中出），十位开2（中出）、个位开3（中出）。大底即中奖。'
     },
     num: {
     bigOrd: [{
       numLit: '百',
       ordNum: [false, false, false, false, false, false, false, false, false, false]
     }, {
       numLit: '十',
       ordNum: [false, false, false, false, false, false, false, false, false, false]
       }, {
        numLit: '个',
        ordNum: [false, false, false, false, false, false, false, false, false, false]
      }]
     }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  notSelect: function (e) {
      var that = this;
      var sel = that.data.num.bigOrd;
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 10; j++) {
          sel[i].ordNum[j] = !sel[i].ordNum[j] ;
        }
      }
      var itm = "num.bigOrd";
      that.setData({
        [itm]: sel
      })
  },
  numSel: function (e) {
      var that = this;
      var ind = e.target.dataset.y;
      var u = e.target.dataset.t;
      var ite = that.data.num.bigOrd[ind].ordNum[u];
      ite = !ite;
      var s = "num.bigOrd[" + ind +"].ordNum["+u+"]";
      that.setData({
        [s]:ite
      })
  },
  allSelect: function (e) {
    var that = this;
    var sel = that.data.num.bigOrd;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 10; j++) {
        sel[i].ordNum[j] = true
      }
    }
    var itm = "num.bigOrd";
    that.setData({
      [itm]: sel
    })
  },
  clearSelect: function () {
    var that = this;
    var sel = that.data.num.bigOrd;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 10; j++) {
        sel[i].ordNum[j] = false;
      }
    }
    var itm = "num.bigOrd";
    that.setData({
      [itm]: sel
    })
  },
  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var sel = that.data.num.bigOrd;
    var t = [];
    var choosePage = wx.getStorageSync('choose');
    for (var i = 0; i < sel.length; i++) {
      var s = '';
      for (var j = 0; j < 10; j++) {
        if (sel[i].ordNum[j] == true) {
          s += j;
        }
        if (j == 9 && s.length > 0) {
          t[i] = s; 
        }
      }
    }
    // console.log(t)
    var a = [];
    if (t.length > 0) {
      for (var s = 0; s < t.length; s++) {
        if (t[s] != undefined) {
        var m = t[s].split('').join(',');
         a[s] = m;
        }
      }
    }
    // console.log(a)
    
    var tao = wx.getStorageSync('tiao');
    var tiao = '';
    for (var s = 0; s <a.length; s++) {
      if (a[s] == undefined) {
      } else {
        if (tiao.length == 0) {
          tiao += 'dingwei_' + (s+1) + '_' + a[s];
        } else {
          tiao += '#dingwei_' + (s + 1) + '_' + a[s];
        }
      }
    }
    // wx.setStorageSync('num', a);
    if (choosePage == '1') {
    var s = wx.getStorageSync('detail');
    // console.log(s);
    s[1] = true;
    wx.setStorageSync('detail', s);
    tao[1] = tiao;
    wx.setStorageSync('tiao', tao);
    } else if (choosePage == '2') {
      var slect = wx.getStorageSync('slectBtn');
      slect[1] = true;
      wx.setStorageSync('slectBtn', slect);
      var dataGrou = wx.getStorageSync('record');
      dataGrou[1] = tiao;
      wx.setStorageSync('record', dataGrou);
    }
    wx.navigateBack({
      delta: 1
    })
  },
  
  onLoad: function (options) {
    wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_weishu-bw.html');
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
  diagShow: question.diagShow,
  que: question.que,
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