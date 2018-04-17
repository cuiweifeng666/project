// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title:'直选两码',
      headOff: 'true',
      titleTrue:'true',
      headRightTitle:'直选两码走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    val:0,
    question: {
      off: false,
      title: '直选两码',
      content: '共分为 百十位 百个位 十个位三个页面，例如在百十位页面，选择 00 即为百位0十位0的组合（直选000 001 002 003 004 005 006 007 008 009）'
    },
    sle: [true,false,false],
    boxAdd: {
      box:null,
      select: []
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var select = [];
    for (var t = 0; t < 3; t++) {
      var v = [];
      for (var i = 0; i <99; i++) {
        v.push(false);
      }
      select.push(v);
    }
    var box = [];
     for (var i = 0; i < 99; i++) {
      box.push(false);
    }
    var itm = "boxAdd.select"
    var itm1 = "boxAdd.box"
    that.setData({
      [itm]: select,
      [itm1]:box
    });
  },
  changGroup: function (ind) {
    var that = this;
    var dat = that.data.boxAdd.select[ind]
    var s = "boxAdd.box";
    that.setData({
      [s]: dat
    });
  },
  numChange: function (e) {
      var that = this;
      var ind = e.target.dataset.i;
      var dat = that.data.sle;
      for (var t = 0; t< dat.length; t++) {
        if (t == ind) {
          dat[ind] = true;
          that.changGroup(ind);
        } else {
          dat[t] = false;
        }
      }
      that.setData({
        sle:dat,
        val: ind
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
    var t = that.data.val;
    var i = e.target.dataset.ch;
    box[i] = !box[i]
    var s = box[i];
    var itm = "boxAdd.box[" + i + "]";
    var itm1 = "boxAdd.select["+t+"][" + i + "]";
    that.setData({
      [itm]: s,
      [itm1]: box[i]
    })
  },
  
  notSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    var u = that.data.val;
    var dat = that.data.boxAdd.select[u];
    for (var t = 0; t < dat.length; t++) {
      dat[t] = !dat[t];
    }
    var itm = "boxAdd.box";
    var itm1 = "boxAdd.select[" + u + "]";
    that.setData({
      [itm]: dat,
      [itm1]: dat
    })
  },
  allSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    var u = that.data.val;
    var dat = that.data.boxAdd.select[u];
    for (var t = 0; t < dat.length; t++) {
      dat[t] = true;
    }
    var itm = "boxAdd.box";
    var itm1 = "boxAdd.select[" + u + "]";
    that.setData({
      [itm]: dat,
      [itm1]: dat
    })
  },
  clearSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    var u = that.data.val;
    var dat = that.data.boxAdd.select[u];
    for (var t = 0; t < dat.length; t++) {
      dat[t] = false;
    }
    var itm = "boxAdd.box";
    var itm1 = "boxAdd.select[" + u + "]";
    that.setData({
      [itm]: dat,
      [itm1]: dat
    })
  },

  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var sel = that.data.sle;
    var add = that.data.boxAdd.select;
    var arr = [];
    for (var t = 0; t < sel.length;t++) {
      var s = [];
      for (var j = 0; j < 99; j++) {
        if (add[t][j] == true) {
          s.push(j);
        }
        if (j == 98 && s.length > 0) {
          arr[t] = s;
        }
      }
    }

    var a = [];
    if (arr.length > 0) {
      for (var s = 0; s < arr.length; s++) {
        if (arr[s] != undefined && arr[s] != '') {
        //   var newArr = [];
        //   for (var t = 0; t < arr[s].length; t++) {
        //     if (arr[s][t] != undefined) {
        //       newArr.push(arr[s][t]);
        //     }
        //   }

          a[s] = arr[s].join(',');
        }
      }
    }
    console.log(a)
    var tao = wx.getStorageSync('tiao');
    var tiao = '';
    for (var s = 0; s < a.length; s++) {
      if (a[s] == undefined || a[s] == 'none') {
      } else {
        if (tiao.length == 0) {
          tiao += 'zhixuanliangma_' + (s+1) + '_' + a[s];
        } else {
          tiao += '#zhixuanliangma_' + (s + 1) + '_' + a[s];
        }
      }
    }
    console.log(tiao);
    var s = wx.getStorageSync('detail');
    s[12] = true;
    wx.setStorageSync('detail', s);
    tao[12] = tiao;
    wx.setStorageSync('tiao', tao);
    wx.navigateBack({
      delta: 1
    })
  
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