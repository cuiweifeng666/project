// pages/fc3dfilter/space/space.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '跨度',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '跨度走势图',
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
    wx.navigateTo({
      title: "goback",
      url: '../fc3dfilter'
    })
  },
  sure: function () {
    var that = this;
    var sel = that.data.num.bigOrd;
    var t = [];
    for (var i = 0; i < 3; i++) {
      var s = '';
      for (var j = 0; j < 10; j++) {
        if (sel[i].ordNum[j] == true) {
          s += j;
        }
        if (j == 9 && s.length > 0) {
          t.push(s);
        }
      }
    }
    var a = [];
    if (t.length > 0) {
      for (var s = 0; s < t.length; s++) {
        var m = t[s].split('').join(',');
        a.push(m);
      }
    }
    wx.setStorageSync('num', a);
    // wx.navigateTo({
    //   title: "goback",
    //   url: '../fc3dfilter'
    // })  
    wx.request({
      url: "https://tools.m.cjcp.com.cn/gl/?m=Data&a=filters",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        hundredNumList: a[0],
        tenNumList: a[1],
        oneNumList: a[2],
        strCondition: 'dingwei_1_1',
        isAll: '1'
      },
      success: function (res) {
        // var sel = that.data.num.bigOrd;
        // for (var i = 0; i < 3; i++) {
        //   for (var j = 0; j < 10; j++) {
        //     sel[i].ordNum[j] = true
        //   }
        // }
        // var itm = "num.bigOrd";
        console.log(res)
        that.setData({
          kj: res.data
        })
      },
      fail: function (res) {
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
      }
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