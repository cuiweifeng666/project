// pages/fc3dfilter/even/even.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */

  data: {
    head: {
      title: '遗漏值尾',
      headOff: true,
      titleTrue: 'false',
      headRightTitle: '遗漏值尾走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },

    even: ['遗漏总和尾', '百位遗漏值尾', '十位遗漏值尾', '个位遗漏值尾' ],
    gropu: [true, false, false, false],
    val:0,
    question: {
      off: false,
      title: '遗漏值尾',
      content: '当期号码遗漏值的尾。'
    },
    boxAdd: {
      box: null,
      select: []
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var box = [];
    var select = that.data.boxAdd.select;
    for (var i = 0; i < 10; i++) {
      box.push(false);
    }
    for (var i = 0; i <4; i++) {
      var arr = [];
      for (var t = 0; t< 10; t++) {
          arr.push(false);
      }
     select.push(arr);
    }
    console.log(select)
    var itm = "boxAdd.box";
    var itm1 = "boxAdd.select";
    that.setData({
      [itm]: box,
      [itm1]:select
    });
  },
  changSel: function (e) {
    var that = this;
    var ind = e.target.dataset.sel;
    var dat = that.data.gropu;
    var val = that.data.val;
    var select = that.data.boxAdd.select;
    for (var t = 0; t < dat.length; t++) {
      if (t == ind) {
        console.log(2);
        dat[t] = true;
      } else {
        dat[t] = false;
      }
    }
    console.log(dat)
    var itm = "boxAdd.select[" + ind+"]";
    var itm1 = "boxAdd.box";
   
      that.setData({
        gropu: dat,
        [itm1]: select[ind],
        t: val,
        val: ind
      });
    
  },
  changGroup: function (ind) {
    var that = this;
    var ind = e.target.dataset.sel;
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
    for (var t = 0; t < dat.length; t++) {
      if (t == ind) {
        dat[ind] = true;
        that.changGroup(ind);
      } else {
        dat[t] = false;
      }
    }
    that.setData({
      sle: dat,
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
    var itm1 = "boxAdd.select[" + t + "][" + i + "]";
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
    var sel = that.data.even;
    var add = that.data.boxAdd.select;
    var arr = [];
    for (var t = 0; t < 4; t++) {
      var newArr = [];
      for (var j = 0; j < add[t].length; j++) {
        if (add[t][j] == true) {
          newArr.push(j);
        }
        // if (add[t].length - 1 && newArr.length > 0) {
        //   console.log(newArr)
        //   arr[t] = newArr;
        // }
      }
      arr[t] = newArr;
    }
    console.log(arr);
    var a = [];
    if (arr.length > 0) {
      for (var s = 0; s < arr.length; s++) {
        if (arr[s] != undefined && arr[s] != '') {
          a[s] = arr[s].join(',');
        }
      }
    }
    var tao = wx.getStorageSync('tiao');
    var tiao = '';
    for (var s = 0; s < a.length; s++) {
      if (a[s] == undefined || a[s] == 'none') {
      } else {
        if (tiao.length == 0) {
          tiao += 'zhixuanliangma_' + (s ) + '_' + a[s];
        } else {
          tiao += '#zhixuanliangma_' + (s) + '_' + a[s];
        }
      }
    }
    var s = wx.getStorageSync('detail');
    s[30] = true;
    wx.setStorageSync('detail', s);
    tao[30] = tiao;
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