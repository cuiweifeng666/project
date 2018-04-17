// pages/fc3dfilter/space/space.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '遗漏总和尾',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '遗漏总和尾走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '遗漏总和尾',
      content: '指三个号码的遗漏值之和的尾。例：开奖号：794，遗漏值分别为：9，3，12，遗漏值总和尾为：9+3+12=24的尾数，即4'
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
    var itm = "boxAdd.box"
    that.setData({
      [itm]: box,
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
        return false;
      }
    }
    return true;
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
    // wx.redirectTo({
    //   title: "goback",
    //   url: '../fc3dfilter'
    // })
    wx.navigateBack({
      delta: 1
    })

  },
  sure: function () {
    var that = this;
    var t = [];
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
    var group = wx.getStorageSync('group');
    if (group == 0) {
    var tao = wx.getStorageSync('tiao');
    var tiao = '';
    tiao = "yilouzonghewei_0_" + a;
    var s = wx.getStorageSync('detail');
    s[33] = true;
    wx.setStorageSync('detail', s);
    tao[33] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var tao = wx.getStorageSync('tiao02');
      var tiao = '';
      tiao = "yilouzonghewei_0_" + a;
      var s = wx.getStorageSync('detail02');
      s[29] = true;
      wx.setStorageSync('detail02', s);
      tao[29] = tiao;
      wx.setStorageSync('tiao02', tao);
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