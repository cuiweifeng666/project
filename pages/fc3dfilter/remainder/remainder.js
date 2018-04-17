// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title:'余数和',
      headOff: 'true',
      titleTrue:'true',
      headRightTitle:'余数和走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '余数和',
      content: '除3余数和=百位号码除3余数+十位号码除3余数+个位号码除3余数，如号码123，除3余数和即为1+2+0=3。其它余数和依此类推。'
    },
    val:0,
    duty: [3,4,5,6,7],
    sle: [true, false, false, false, false],
    boxAdd: {
      box:null,
      content: [
        {
          off: [false, false, false, false, false, false, false]
        },
        {
          off: [false, false, false, false, false, false, false, false, false, false]
        },
        {
          off: [false, false, false, false, false, false, false, false, false, false, false, false, false]
        },
        {
          off: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        },
        {
          off: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ]
        }
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
    for (var i = 0; i < 7; i++) {
      box.push(false);
    }
   
    wx.setStorageSync('link', ' https://m.cjcp.com.cn/zst/cjw3d/3d_cyh.html')

    var itm1 = "boxAdd.box"
    that.setData({
      [itm1]: box
    });
  },
  changGroup: function (ind) {
    var that = this;
    var dat = that.data.boxAdd.content[ind].off;
    var s = "boxAdd.box";
    // console.log(ind,dat)
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
    // console.log(that.data)
  },
  boxTap: function (e) {
    var that = this;
    var box = that.data.boxAdd.box;
    var t = that.data.val;
    var i = e.target.dataset.ch;
    var s = box[i];
    // console.log(i, t, s);
     s = !s;
    // console.log(i,t,s);
    var itm = "boxAdd.box[" + i + "]";
    // console.log(that.data.boxAdd)
    var itm1 = "boxAdd.content[" + t + "].off[" + i + "]";
    that.setData({
      [itm]: s,
      [itm1]:s
    })
   
  },

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
      for (var j = 0; j < add[t].off.length; j++) {
        if (add[t].off[j]== true) {
          s[j] =  j;
        }
        if (j == add[t].off.length-1 && s.length > 0) {
          arr[t] = s;
          console.log(s)
        }
      }
    }
 
    var a = [];
    if (arr.length > 0) {
      for (var s = 0; s < arr.length; s++) {
        if (arr[s] != undefined) {
          // var m = arr[s].split('').join(',');
          // a[s] = m;
          var newArr = []; 
          for (var t = 0;t < arr[s].length; t++) {
            if (arr[s][t] != undefined) {
              newArr.push(arr[s][t]);
            }
          }
          a[s] = newArr.join(',');
        }
      }
    }

    var tiao = '';
    for (var s = 0; s < a.length; s++) {
      if (a[s] == undefined || a[s] == 'none') {
      } else {
        if (tiao.length == 0) {
          tiao += 'yushuhe_' + (duty[s]) + '_' + a[s];
        } else {
          tiao += '#yushuhe_' + (duty[s]) + '_' + a[s];
        }
      }
    }
    var group = wx.getStorageSync('group');
    if (group == 0) {
    var s = wx.getStorageSync('detail');
    var tao = wx.getStorageSync('tiao');
    s[23] = true;
    wx.setStorageSync('detail', s);
    tao[23] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var s = wx.getStorageSync('detail02');
      var tao = wx.getStorageSync('tiao02');
      s[20] = true;
      wx.setStorageSync('detail02', s);
      tao[20] = tiao;
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