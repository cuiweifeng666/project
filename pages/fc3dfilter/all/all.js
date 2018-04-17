// pages/fc3dfilter/space/space.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '奇偶质和比',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '奇偶质和比走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '奇偶质和比',
      content: '奇偶、质合的比值的组合；如号码168，奇偶比是：1:2，质合比是：1:2，它们的组合为1:2/1:2。'
    },
    boxAdd: {
      box: ['0:3/0:3', '0:3/1:2', '0:3/2:1', '0:3/3:0', '1:2/0:3', '1:2/1:2', '1:2/2:1', '1:2/3:0', '2:1/0:3', '2:1/1:2', '2:1/2:1', '2:1/3:0', '3:0/0:3', '3:0/1:2', '3:0/2:1', '3:0/3:0'],
     select: [
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var box = [];
    wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_shuxingzh-jozh.html')

    // for (var i = 0; i < 10; i++) {
    //   box.push(false);
    // }
    // var itm = "boxAdd.box"
    // that.setData({
    //   [itm]: box,
    // });
  },
  boxTap: function (e) {
    var that = this;
    var box = that.data.boxAdd.select;
    var i = e.target.dataset.ch;
    box[i] = !box[i]
    var s = box[i];
    var itm = "boxAdd.select[" + i + "]";
    that.setData({
      [itm]: s
    })
  },

  notSelect: function () {
    var that = this;
    var box = that.data.boxAdd.select;
    for (var t = 0; t < box.length; t++) {
      box[t] = !box[t];
    }
    var itm = "boxAdd.select";
    that.setData({
      [itm]: box
    })
  },
  allSelect: function () {
    var that = this;
    var box = that.data.boxAdd.select;
    for (var t = 0; t < box.length; t++) {
      box[t] = true;
    }
    var itm = "boxAdd.select";
    that.setData({
      [itm]: box
    })
  },
  clearSelect: function () {
    var that = this;
    var box = that.data.boxAdd.select;
    for (var t = 0; t < box.length; t++) {
      box[t] = false;
    }
    var itm = "boxAdd.select";
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
    //   url: '../../fc3dfilter'
    // })
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var t = [];
    var box = that.data.boxAdd.box;
    var sel = that.data.boxAdd.select;
    for (var i = 0; i < box.length; i++) {
      if (sel[i] == true) {
        t.push(box[i])
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
    tiao = "dxzh_0_" + a;
    var s = wx.getStorageSync('detail');
    s[34] = true;
    wx.setStorageSync('detail', s);
    tao[34] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var tao = wx.getStorageSync('tiao02');
      var tiao = '';
      tiao = "dxzh_0_" + a;
      var s = wx.getStorageSync('detail02');
      s[28] = true;
      wx.setStorageSync('detail02', s);
      tao[28] = tiao;
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