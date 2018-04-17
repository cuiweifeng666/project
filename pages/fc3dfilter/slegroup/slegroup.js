// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title:'组选两码',
      headOff: 'true',
      titleTrue:false,
      headRightTitle:'和值走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '组选两码',
      content: `1：由两个不同数字组成的组选二码，包含有8个组六2个组三号码，例如16对应号码如下： 016 116 126 136 146 156 166 167 168 169\n\r\n\r\n\r \n\r\n\r\n\r \n\r\n\r\n\r \n\r\n\r\n\r \n\r\n\r\n\r\t\t\t     
                 2：由两个相同数字组成的组选二码，包含有1个豹子9个组三号码，例如11对应号码如下： 011 111 112 113 114 115 116 117 118 119`
    },
    boxAdd: {
      box:null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var box = [];
    for (var i = 0; i < 99; i++) {
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

  cancel: function () {
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
    var tiao = '';
    tiao = "zuxuanliangma_0_" + a;
    var group = wx.getStorageSync('group');
    if (group == 0) {
      var tao = wx.getStorageSync('tiao');
      var s = wx.getStorageSync('detail');
      s[13] = true;
      wx.setStorageSync('detail', s);
      tao[13] = tiao;
      wx.setStorageSync('tiao', tao);
    } else {
      var s = wx.getStorageSync('detail02');
      var tao = wx.getStorageSync('tiao02');
      s[11] = true;
      wx.setStorageSync('detail02', s);
      tao[11] = tiao;
      wx.setStorageSync('tiao02', tao);
    }
    wx.navigateBack({
      delta: 1
    })
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {
  
  // },
 
  // boxTap: function (e) {
  //   var that = this;
  //   var box = that.data.boxAdd.box;
  //   var i = e.target.dataset.ch;
  //   box[i] = !box[i]
  //   var s = box[i];
  //   var itm = "boxAdd.box[" + i + "]";
  //   that.setData({
  //     [itm]: s
  //   })
  // },
  
  // notSelect: function () {
  //   var that = this;
  //   var box = that.data.boxAdd.box;
  //   for (var t = 0; t < box.length; t++) {
  //     box[t] = !box[t];
  //     }
  //   var itm = "boxAdd.box";
  //   that.setData({
  //     [itm]: box
  //   })
  // },
  // allSelect: function () {
  //   var that = this;
  //   var box = that.data.boxAdd.box;
  //   for (var t = 0; t < box.length; t++) {
  //     box[t] = true;
  //   }
  //   var itm = "boxAdd.box";
  //   that.setData({
  //     [itm]: box
  //   })
  // },
  // clearSelect: function () {
  //   var that = this;
  //   var box = that.data.boxAdd.box;
  //   for (var t = 0; t < box.length; t++) {
  //     box[t] = false;
  //   }
  //   var itm = "boxAdd.box";
  //   that.setData({
  //     [itm]: box
  //   })
  // },
  // numSpe: function (num) {
  //   var s = false;
  //   for (var u = 2; u < num; u++) {
  //     if (num % u == 0) {
  //       s = false;
  //     } else {
  //       s = true;
  //     }
  //   }
  //   return s;
  // },
  // cancel: function () {
  //   wx.navigateTo({
  //     title: "goback",
  //     url: '../fc3dfilter'
  //   })
  // },
  // sure: function () {
  //   var that = this;
  //   var t = [];
  //   var sel = that.data.boxAdd.box;
  //   for (var i = 0; i < sel.length; i++) {
  //     if (sel[i] == true) {
  //       t.push(i)
  //     }
  //   }
  //   var a = '';
  //   if (t.length > 0) {
  //     a = t.join(',');
  //   } else {
  //     return;
  //   }
  //   var tao = wx.getStorageSync('tiao');
  //   var tiao = '';
  //   tiao = "zuxuanliangma_0_" + a;
  //   var s = wx.getStorageSync('detail');
  //   s[13] = true;
  //   wx.setStorageSync('detail', s);
  //   tao[13] = tiao;
  //   wx.setStorageSync('tiao', tao);
  //   wx.navigateTo({
  //     title: "goback",
  //     url: '../fc3dfilter'
  //   });

  // },
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
  diagShow: question.diagShow,
  que: question.que,
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