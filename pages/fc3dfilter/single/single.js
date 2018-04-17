// pages/fc3dfilter/even/even.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '单选码距值',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '单选码距值走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    even: ['遗漏总和尾', '百位遗漏值尾', '十位遗漏值尾', '个位遗漏值尾' ],
    gropu: [true, false, false, false],
    question: {
      off: false,
      title: '单选码距值',
      content: '3D投注号码包括的码距有第一码距，第二码距和第三码距。其中第一码距包括首距和尾距。首距是指第一个号码和0之间的距离。例如：投注号码486的第一个号码是4，那么首距等于3(1,2,3)；尾距是指第三个号码和9之间的距离。例如：投注号码486的第三个号码是6，那么尾距等于2(7,8)。那么第一码距等于首距加尾距，等于3 + 2 = 5。第二码距是第一位号码和第二位号码之间的距离。例如：投注号码486的第一位是4，第二位是8，所以第二码距等于3(5,6,7)。第三码距是第二位号码和第三位号码之间的距离。例如：投注号码486的第三码距等于1(7)。这里指的码距值是第一、第二和第三码距中的最大码距。所以，投注号码的码距值等于第一码距，等于5。'
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
    // console.log(a);
    var tao = wx.getStorageSync('tiao');
    var tiao = '';
    tiao = "hezhiwei_0_" + a;
    var s = wx.getStorageSync('detail');
    s[31] = true;
    wx.setStorageSync('detail', s);
    tao[31] = tiao;
    // console.log(tiao)
    wx.setStorageSync('tiao', tao);
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
  diagShow: question.diagShow,
  que: question.que,
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})