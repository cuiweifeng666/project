// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '凹凸',
      headOff: 'true',
      titleTrue:'true',
      headRightTitle:'凹凸走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '凹凸',
      content: `凹下型：十位为最小数字的号码
凸起型：十位为最大数字的号码
上升型：百位、十位、个位由小变大的号码，不包括百位和十位相同、十位和个位相同的组三号
下降型：百位、十位、个位由大变小的号码，不包括百位和十位相同、十位和个位相同的组三号
平行型：百位、十位、个位一样
偏类型：百位和十位相同或十位和个位相同的组三号`
    },
    sle: [false, false, false, false, false, false],
    boxAdd: {
      box:null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_aotu.html')

  },
  numChange: function (e) {
      var that = this;
      var ind = e.target.dataset.i;
      var dat = that.data.sle;
      dat[ind] = !dat[ind];
      that.setData({
        sle:dat
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
    var box = that.data.sle;
    for (var t = 0; t < box.length; t++) {
      box[t] = !box[t];
      }
    // var itm = "boxAdd.box";
    that.setData({
      sle: box
    })
  },
  allSelect: function () {
    var that = this;
    var box = that.data.sle;
    for (var t = 0; t < box.length; t++) {
      box[t] = true;
    }
    that.setData({
      sle: box
    })
  },
  clearSelect: function () {
    var that = this;
    var box = that.data.sle;
    for (var t = 0; t < box.length; t++) {
      box[t] = false;
    }
    that.setData({
      sle: box
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
    var sel = that.data.sle;
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
    var tao = wx.getStorageSync('tiao');
    var tiao = '';
    tiao = "aotu_0_" + a;
    var s = wx.getStorageSync('detail');
    s[22] = true;
    wx.setStorageSync('detail', s);
    tao[22] = tiao;
    wx.setStorageSync('tiao', tao);
    wx.navigateBack({
      delta: 1
    })
    // aotu_0_
    
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
  diagShow: question.diagShow,
  que: question.que,
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})