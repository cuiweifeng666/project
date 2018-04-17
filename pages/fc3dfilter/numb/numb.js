// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title:'和值',
      headOff: 'true',
      titleTrue:'true',
      headRightTitle:'和值走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '和值',
      content: '号码的各个数字相加的总和，如号码为362，和值为3+6+2=11，和值共有28个。'
    },
    sle: [false, false, false, false],
    boxAdd: {
      box:null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var choosePage = wx.getStorageSync('choose'); 
    if (choosePage == '1') {
    wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_hezhi.html');
    var box = [];
    for (var i = 0; i <28; i++) {
      box.push(false);
    }
    } else if (choosePage == '2') {
      wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjwpl5/pl5_hezhi.html');
      var box = [];
      for (var i = 0; i < 46; i++) {
        box.push(false);
      }
    }
    var itm = "boxAdd.box"
    that.setData({
      [itm]: box,
      choosePage: choosePage
    });
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
    var sle  = that.data.sle;
    for (var s = 0; s < sle.length; s++) {
      sle[s] = false;      
    }
    for (var t = 0; t < box.length; t++) {
      box[t] = false;
    }

    var itm = "boxAdd.box";
    that.setData({
      [itm]: box,
      sle:sle
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
    var sle = that.data.sle;
    var i = e.target.dataset.i;
    for (var t = 0; t < sle.length; t++) {
      if (t == i) {
      sle[t] = true;
      } else {
        sle[t] = false;
      }
    }
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
        var u = that.isPrimeNum(t);
        if (u) {
          box[0] = false;
          box[t] = true;
        }
      } else if (i == 3) {
        var u = that.isPrimeNum(t);
        if (!u) {
          box[t] = true;
          box[0] = true;
        }
      }
    
    }
    var itm = "boxAdd.box";
    that.setData({
      [itm]: box,
      sle:sle
    })
  },
  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  isPrimeNum: function (num) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    };
    return true;
  },
  sure: function () {
    var that = this;
    var sel = that.data.boxAdd.box;
    var choosePage = that.data.choosePage;
    var t = [];
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
    tiao = "hezhi_0_" + a;
    if (choosePage == '1') {
    var group = wx.getStorageSync('group');
    if (group == 0) {
    // wx.setStorageSync('num', a);
     var tao = wx.getStorageSync('tiao');
    var s = wx.getStorageSync('detail');
    s[2] = true;
    wx.setStorageSync('detail', s);
    tao[2] = tiao;
    wx.setStorageSync('tiao', tao);

    } else {
      var tao = wx.getStorageSync('tiao02');
      var s = wx.getStorageSync('detail02');
      s[1] = true;
      wx.setStorageSync('detail02', s);
      tao[1] = tiao;
      wx.setStorageSync('tiao02', tao);
      
    }
    } else if (choosePage == '2') {
      var slect = wx.getStorageSync('slectBtn');
      slect[2] = true;
      wx.setStorageSync('slectBtn', slect);
      var dataGrou = wx.getStorageSync('record');
      dataGrou[2] = tiao;
      wx.setStorageSync('record', dataGrou);
    }
    wx.navigateBack({
      delta: 1
    })
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
  diagShow: question.diagShow,
  que: question.que,
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