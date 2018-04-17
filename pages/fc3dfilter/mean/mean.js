// pages/fc3dfilter/space/space.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '均值',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '均值走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '均值',
      content: '所选号码的平均值，如号码为162，那么均值为(1+6+2)/3=3。'
    },
    boxAdd: {
      box: null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var box = [];
    for (var i = 0; i < 10; i++) {
      box.push(false);
    }
    var title = that.data.head.titleTrue;
    var choosePage = wx.getStorageSync('choose');
    if (choosePage == '1') {
    title =true
    wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_weishu-jz.html');
  
    } else if (choosePage == '2') {
      title = false;
    }
    var itm = "boxAdd.box";
    var itm1 = "head.titleTrue";
    that.setData({
      [itm]: box,
      [itm1]: title
    });
  },
  boxTap: function (e) {
    var that = this;
    var box = that.data.boxAdd.box;
    var i = e.target.dataset.ch;
    box[i] = !box[i]
    var s = box[i];
    var itm = "boxAdd.box[" + i + "]";
    that.setData({
      [itm]: s
    })
  },

  notSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    for (var t = 0; t < box.length; t++) {
      box[t] = !box[t];
    }
    var itm = "boxAdd.box";
    that.setData({
      [itm]: box
    })
  },
  allSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    for (var t = 0; t < box.length; t++) {
      box[t] = true;
    }
    var itm = "boxAdd.box";
    that.setData({
      [itm]: box
    })
  },
  clearSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    for (var t = 0; t < box.length; t++) {
      box[t] = false;
    }
    var itm = "boxAdd.box";
    that.setData({
      [itm]: box
    })
  },
  numSpe: function (num) {
    var s = false;
    for (var u = 2; u < num; u++) {
      if (num % u == 0) {
        s = false;
      } else {
        s = true;
      }
    }
    return s;
  },
  select: function (e) {
    var that = this;
    var box = that.data.boxAdd.box;
    var i = e.target.dataset.i;
    for (var t = 0; t < box.length; t++) {
      box[t] = false;
      if (i == 0) {
        if (t % 2 != 0) {
          box[t] = true;
        }
      } else if (i == 1) {
        if (t % 2 == 0) {
          box[t] = true;
        }
      } else if (i == 2) {
        if (that.numSpe(t)) {
          box[t] = true;
        };
      }

    }
    var itm = "boxAdd.box";
    that.setData({
      [itm]: box
    })
  },
  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var t = [];
    var choosePage = wx.getStorageSync('choose');
    var sel = that.data.boxAdd.box;
    for (var i = 0; i < sel.length; i++) {
      if (sel[i] == true) {
        t.push(i)
      }
    }
    var a = '';
    if (t.length > 0) {
      a = t.join(',');
    } else {
      return;
    }
    var tiao = '';
    tiao = "junzhi_0_" + a;
    if (choosePage == '1') {
    var group = wx.getStorageSync('group');
    if (group == 0) {
    var tao = wx.getStorageSync('tiao');
    
    var s = wx.getStorageSync('detail');
    s[18] = true;
    wx.setStorageSync('detail', s);
    tao[18] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var tao = wx.getStorageSync('tiao02');
      
      var s = wx.getStorageSync('detail02');
      s[16] = true;
      wx.setStorageSync('detail02', s);
      tao[16] = tiao;
      wx.setStorageSync('tiao02', tao);
    }
    } else if (choosePage == '2') {
      var slect = wx.getStorageSync('slectBtn');
      slect[4] = true;
      wx.setStorageSync('slectBtn', slect);
      var dataGrou = wx.getStorageSync('record');
      dataGrou[4] = tiao;
      wx.setStorageSync('record', dataGrou);
    }
    wx.navigateBack({
      delta: 1
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  diagShow: question.diagShow,
  que: question.que,
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