// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title:'两码和',
      headOff: 'true',
      titleTrue:'true',
      headRightTitle:'两码和走势图',
    },
    question: {
      off: false,
      title: '两码和',
      content: '单注号码任意两位数字相加的值，范围是0～18，可以对应1个（豹子）、2个（组三）或3个（组六）。如果选定4 5 6，那么列出全部两码和含有4或5或6的号码。'
    },
    val:0,
    sle: [true, false, false, false],
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
    for (var t = 0; t < 4; t++) {
      var v = [];
      for (var i = 0; i < 10; i++) {
        v.push(false);
      }
      select.push(v);
    }
    wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_liangweihe-bsh.html')
    var box = [];
    for (var i = 0; i < 10; i++) {
      box.push(false);
    }
    var itm = "boxAdd.select"
    var itm1 = "boxAdd.box"
    that.setData({
      [itm]: select,
      [itm1]: box
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
    console.log(that.data)
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
    console.log(that.data)
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
    for (var t = 0; t < sel.length; t++) {
      var newArr = []; 
      // console.log(add[t])
      for (var j = 0; j < add[t].length; j++) {
        if (add[t][j] == true) {
          newArr.push(j);
        }
        if (add[t].length - 1 && newArr.length > 0) {
          arr[t] = newArr;
        }
      }
    }
    var a = [];
    if (arr.length > 0) {
      for (var s = 0; s < arr.length; s++) {
        if (arr[s] != undefined && arr[s] != '') {
          var newArr = [];
          for (var t = 0; t < arr[s].length; t++) {
            if (arr[s][t] != undefined) {
              newArr.push(arr[s][t]);
            }
          }
          // console.log(newArr)
          a[s] = newArr.join(',');
        }
      }
    }
    
    var tiao = '';
    for (var s = 0; s < a.length; s++) {
      if (a[s] == undefined || a[s] == 'none') {
      } else {
        if (tiao.length == 0) {
          tiao += 'liangmahe_' + (s) + '_' + a[s];
        } else {
          tiao += '#liangmahe_' + (s) + '_' + a[s];
        }
      }
    }
    console.log(tiao);
    var group = wx.getStorageSync('group');
    if (group == 0) {
    var tao = wx.getStorageSync('tiao');
    var s = wx.getStorageSync('detail');
    s[19] = true;
    wx.setStorageSync('detail', s);
    tao[19] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var tao = wx.getStorageSync('tiao02');
      var s = wx.getStorageSync('detail02');
      s[17] = true;
      wx.setStorageSync('detail02', s);
      tao[17] = tiao;
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