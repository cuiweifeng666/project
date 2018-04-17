// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title:'直选垃圾注',
      headOff: true,
      titleTrue:'false',
      headRightTitle:'直选垃圾注走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '直选垃圾注',
      content: '过滤结果里排除所选条件组合的直选号码。'
    },
    sle: [false, false, false, false, false, false, false, false, false, false],
    boxAdd: {
      box:null
    },
    group:['百','十','个'],
    url: '../../../web/images/tool_8.png',
    val: 0,
    text: '',
    textArr: [],
    num: {
      bigOrd: [{
        numLit: '百',
        ordNum: [false, false, false, false, false, false, false, false, false, false]
      }, {
        numLit: '十',
        ordNum: [false, false, false, false, false, false, false, false, false, false]
      }, {
        numLit: '个',
        ordNum: [false, false, false, false, false, false, false, false, false, false]
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var box = [];
    for (var i = 0; i <10; i++) {
      box.push(false);
    }
    var itm = "boxAdd.box"
    that.setData({
      [itm]: box,
    });
  },
  numSel: function (e) {
      var that = this;
      var ind = e.target.dataset.y;
      var t = e.target.dataset.t;
      var dat = that.data.num.bigOrd[ind].ordNum;
      // for (var t = 0; t > dat.length; t++) {
      //   if (t == ind) {
      //     dat[ind] = true;
      //   } else {
      //     dat[t] = false;
      //   }
      // }
      dat[t] = !dat[t];
      var itm = "num.bigOrd[" + ind + "].ordNum["+t+"]";
      that.setData({
        [itm]: dat[t]
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
  clear: function (e) {
    var that = this;
    var ind = e.target.dataset.u;
    var arr = that.data.textArr;
    arr.splice(arr.findIndex(v => v.id === ind), 1)
    that.setData({
      textArr: arr
    })
  },
  notSelect: function () {
    var that = this;
    var dat = that.data.num.bigOrd;
    for (var t = 0; t < dat.length; t++) {
        for (var s = 0; s <10;s++) {
          dat[t].ordNum[s] = !dat[t].ordNum[s] ;
        }
      }
    var itm = "num.bigOrd";
    that.setData({
      [itm]: dat
    })
  },
  allSelect: function () {
    var that = this;
    var dat = that.data.num.bigOrd;
    for (var t = 0; t < dat.length; t++) {
      for (var s = 0; s < 10; s++) {
        dat[t].ordNum[s] = true;
      }
    }
    var itm = "num.bigOrd";
    that.setData({
      [itm]: dat
    })
  },
  clearSelect: function () {
    var that = this;
    var dat = that.data.num.bigOrd;
    for (var t = 0; t < dat.length; t++) {
      for (var s = 0; s < 10; s++) {
        dat[t].ordNum[s] = false;
      }
    }
    var itm = "num.bigOrd";
    that.setData({
      [itm]: dat
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
  subminBtn: function (e) {
    var that = this;
    var box = that.data.boxAdd;
    var i = e.target.dataset.s;
    var arr1 = that.data.textArr;
    var arr = [];
    var text = that.data.text;
    var dat = that.data.num.bigOrd;
    var notice = [];    
    for (var e = 0; e < 3; e++) {
      var s = '';
      for (var t = 0; t < 10; t++) {
        if (dat[e].ordNum[t] == true) {
          s += t;
        }
        if (t == 9 && s.length == 0) {
          var jk = that.data.group[e];
          console.log(t)
          wx.showModal({
            title: '操作提示',
            content: jk + '不能为空',
            showCancel: false
          })
          return;
        }
        if (t == 9 && s.length> 0) {
          arr.push(s);
        }
      }
    }
    for (var e = 0; e < 3; e++) {
      for (var t = 0; t < 10; t++) {
        dat[e].ordNum[t] = false;
      }
    }
    var usm = arr.join('-');
    var itm = "num.bigOrd"
    arr1.push(usm);
    that.setData({
      textArr: arr1,
      [itm]:dat
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  diagShow: question.diagShow,
  que: question.que,

  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var t = [];
    var arr = that.data.textArr;
    // for (var i = 0; i < sel.length; i++) {
    //   var s = '';
    //   for (var j = 0; j < 10; j++) {
    //     if (sel[i].ordNum[j] == true) {
    //       s += j;
    //     }
    //     if (j == 9 && s.length > 0) {
    //       t[i] = s;
    //     }
    //   }
    // }
    // // console.log(t)
    // var a = [];
  
    var tao = wx.getStorageSync('tiao');
    var tiao = '';
    // var arr = [];
    // console.log(arr)
    // if (textArr.length > 0) {
    //   for (var s = 0; s < textArr.length; s++) {
    //     if (textArr[s] != undefined) {
    //       var m = textArr[s].split('').join(',');
    //       arr[s] = m;
    //     }
    //   }
    // }
    for (var s = 0; s < arr.length; s++) {
      if (arr[s] == undefined) {
      } else {
        if (tiao.length == 0) {
          tiao += 'duanzu_0_' + arr[s];
        } else {
          tiao += '#duanzu_0_' + arr[s];
        }
      }
    }
    // console.log(tiao)
    var s = wx.getStorageSync('detail');
    s[28] = true;
    wx.setStorageSync('detail', s);
    tao[28] = tiao;
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})