// pages/fc3dfilter/even/even.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    even: ['没有连号', '一组二连号', '一组三连号', '一组四连号', '一组五连号', '两组二连号', '一组二连号，一组三连号', ],
    gropu: [false, false, false, false, false, false, false]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var choosePage = wx.getStorageSync('choose');
    if (choosePage == '2') {
      var even = ['没有连号', '一组二连号', '一组三连号', '一组四连号', '一组五连号', '两组二连号'];
      var gropu = [false, false, false, false, false, false, false]
    }
  },
  changSel: function (e) {
    var that= this;
    var sel = e.target.dataset.sel;
    var group = that.data.gropu;
    group[sel] = !group[sel];
    var itm = "gropu["+sel+"]";
    that.setData({
      [itm]:group[sel]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var t = [];
    var sel = that.data.gropu;
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
    tiao = "lianhao_0_" + a;
    var s = wx.getStorageSync('detail');
    s[5] = true;
    wx.setStorageSync('detail', s);
    tao[5] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var tao = wx.getStorageSync('tiao02');
      var tiao = '';
      tiao = "lianhao_0_" + a;
      var s = wx.getStorageSync('detail02');
      s[4] = true;
      wx.setStorageSync('detail02', s);
      tao[4] = tiao;
      wx.setStorageSync('tiao02', tao);
    }
    wx.navigateBack({
      delta: 1
    })

  },
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