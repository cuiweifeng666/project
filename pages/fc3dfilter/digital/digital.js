// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title:'数字累加',
      headOff: 'true',
      titleTrue:'true',
      headRightTitle:'数字累加走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '数字累加',
      content: '即和值数字的再相加。比如开奖号码为753，和值是15，那么当期1D数字累加值为1+5=6。'
    },
    sle: [false, false, false, false, false, false, false],
    boxAdd: {
      box: null,
      content: [
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false]
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var select = [];
    var box = [];
    for (var i = 0; i < 10; i++) {
      box.push(false);
    }
    wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_weishu-slj.html')

    var itm1 = "boxAdd.box"
    that.setData({
      [itm1]: box
    });
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

  numChange: function (e) {
    var that = this;
    var ind = e.target.dataset.i;
    var dat = that.data.sle;
    var big = that.data.big;
    var box = that.data.boxAdd.box;
    var content = that.data.boxAdd.content;
    dat[ind] = !dat[ind];

    var itm = "boxAdd.content[" + ind + "]";
    var itm1 = "sle[" + ind + "]";
    that.setData({
      sle: dat
    })

    var u = Math.floor(ind / 2);
    var obj = [0, 0, 0];

    for (var t = 0; t < dat.length; t++) {
      if (dat[t]) {
        obj[Math.floor(t / 2)]++;
      }
      if (ind == 0) {
        for (var s = 0; s < content[u].length; s++) {
          if (s >= 5) {
            content[u][s] = dat[ind];
          }
        }
      }
      if (ind == 1) {
        for (var s = 0; s < content[u].length; s++) {
          if (s < 5) {
            content[u][s] = dat[ind];
          }
        }
      }
      if (ind == 2) {
        for (var s = 0; s < content[u].length; s++) {
          if (s % 2 != 0) {
            content[u][s] = dat[ind];
          }
        }
      }
      if (ind == 3) {
        for (var s = 0; s < content[u].length; s++) {
          if (s % 2 == 0) {
            content[u][s] = dat[ind];
          }
        }
      }
      if (ind == 4) {
        for (var s = 0; s < content[u].length; s++) {
          if (that.numSpe(s) == false || s == 0 || s == 1) {
            content[u][s] = dat[ind];
          }
        }
      }
      if (ind == 5) {
        for (var s = 0; s < content[u].length; s++) {
          if (that.numSpe(s) == true && s != 0 && s != 1) {
            content[u][s] = dat[ind];
          }
        }
      }
    }
    // console.log(that.data.boxAdd.content)
    var arr = [false, false, false, false, false, false, false, false, false, false];
    var off = false;
    // console.log(obj);
    for (var i = 0; i < 3; i++) {
      if (obj[i] != 0) {
        if (!off) {
          for (var j = 0; j < 10; j++) {
            if (content[i][j] == true) {
              arr[j] = true;
            };
          }
          off = true;
        } else {
          for (var j = 0; j < 10; j++) {
            if (arr[j] == true) {
              if (content[i][j] == true) {
                arr[j] = true;
              } else {
                arr[j] = false;
              }
            };
          }
        }
      }

    }
    var itm1 = "boxAdd.box";
    that.setData({
      [itm1]: arr
    });


  },
  boxTap: function (e) {
    var that = this;
    var box = that.data.boxAdd.box;
    var t = that.data.val;
    var i = e.target.dataset.ch;
    var s = box[i];
    s = !s;
    var itm = "boxAdd.box[" + i + "]";
    // var itm1 = "boxAdd.content[" + t + "].off[" + i + "]";
    that.setData({
      [itm]: s,
      // [itm1]: s
    })

  },
  diagShow: question.diagShow,
  que: question.que,
  notSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    var u = that.data.val;
    var dat = that.data.boxAdd.content[u].off;
    for (var t = 0; t < dat.length; t++) {
      dat[t] = !dat[t];
    }
    var itm = "boxAdd.box";
    var itm1 = "boxAdd.content[" + u + "].off";
    that.setData({
      [itm]: dat,
      [itm1]: dat
    })
  },
  allSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    var u = that.data.val;
    var dat = that.data.boxAdd.content[u].off;
    for (var t = 0; t < dat.length; t++) {
      dat[t] = true;
    }
    var itm = "boxAdd.box";
    var itm1 = "boxAdd.content[" + u + "].off";
    that.setData({
      [itm]: dat,
      [itm1]: dat
    })
  },
  clearSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    var u = that.data.val;
    var dat = that.data.boxAdd.content[u].off;
    for (var t = 0; t < dat.length; t++) {
      dat[t] = false;
    }
    var itm = "boxAdd.box";
    var itm1 = "boxAdd.content[" + u + "].off";
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
    var duty = that.data.duty;
    var sel = that.data.sle;
    var add = that.data.boxAdd.content;
    var arr = [];
    for (var t = 0; t < sel.length; t++) {
      var s = [];
      // for (var j = 0; j < add[t].off.length; j++) {
      //   if (add[t].off[j] == true) {
      //     s.push(j)
      //   }
      //   if (j == add[t].off.length - 1 && s.length > 0) {
      //     arr[t] = s;
      //   }
      // }
      if (sel[t] == true) {
        arr.push(t)
      }
    }

    var a = [];
    // if (arr.length > 0) {
    // for (var s = 0; s < arr.length; s++) {
    //   if (arr[s] != undefined) {
    //     // var m = arr[s].split('').join(',');
    //     // a[s] = m;
    //     var newArr = [];
    //     for (var t = 0; t < arr[s].length; t++) {
    //       if (arr[s][t] != undefined) {
    //         newArr.push(arr[s][t]);
    //       }
    //     }
    //     a[s] = newArr.join(',');
    //   }
    // }
    // }

    var tiao = '';
    // for (var s = 0; s < arr.length; s++) {
    //   if (arr[s] == undefined || arr[s] == 'none') {
    //   } else {
    //     if (tiao.length == 0) {
    //       tiao += 'weijihe_' + (duty[s]) + '_' + arr[s];
    //     } else {
    //       tiao += '#weijihe_' + (duty[s]) + '_' + arr[s];
    //     }
    //   }
    // }
    if (arr.length > 0) {
      tiao = 'weijihe_0_' + arr.join(',');
    }
    for (var s = 0; s < a.length; s++) {
      if (a[s] == undefined || a[s] == 'none') {
      } else {
        if (tiao.length == 0) {
          tiao += 'shuzileijia_' + (duty[s]) + '_' + a[s];
        } else {
          tiao += '#shuzileijia_' + (duty[s]) + '_' + a[s];
        }
      }
    }
    var group = wx.getStorageSync('group');
    if (group == 0) {
    var s = wx.getStorageSync('detail');
    var tao = wx.getStorageSync('tiao');
    s[27] = true;
    wx.setStorageSync('detail', s);
    tao[27] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var s = wx.getStorageSync('detail02');
      var tao = wx.getStorageSync('tiao');
      s[24] = true;
      wx.setStorageSync('detail02', s);
      tao[24] = tiao;
      wx.setStorageSync('tiao02', tao);
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