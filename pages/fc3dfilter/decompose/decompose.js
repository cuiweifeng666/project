// pages/fc3dfilter/space/space.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '分解式',
      headOff: 'true',
      titleTrue: false,
      headRightTitle: '和尾走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '分解式',
      content: '两个输入区不允许出现相同的数字，且每个输入区的数字出号个数均为1至2个。如：0246-135789。'
    },
    url:'../../../web/images/tool_8.png',
    group: [
      '第一组', '第二组'
    ],
    val: 0,
    text: '',
    textArr: [],
    boxAdd: [
      { 
        content: [
          false, false, false, false, false, false, false, false, false, false
        ]
      },
      {
        content: [
          false, false, false, false, false, false, false, false, false, false
        ]
      }
    
    ]
  },
  changeNum: function (e) {
    var that = this;
    var box = that.data.boxAdd;
    var ind = e.target.dataset.area;
    var i = e.target.dataset.s;
    box[ind].content[i] = !box[ind].content[i];
    var s = box[ind].content[i];
    console.log(ind)
    var itm = "boxAdd[" + ind + "].content[" + i + "]";
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
        textArr:arr
      })
  },
  subminBtn: function (e) {
    var that = this;
    var box = that.data.boxAdd;
    var ind = e.target.dataset.area;
    var i = e.target.dataset.s;
    var arr1 = that.data.textArr;
    var arr = [];
    var text = that.data.text;
    var notice = {};
    for (var e = 0; e < 2; e++) {

      var s = '';
      for (var t = 0; t < 10; t++) {
        if (box[e].content[t] == true) {
          s += t;
          if (notice[t]) {
            wx.showModal({
              title: '操作提示',
              content: '数组间不能有重复数字',
              showCancel: false
            })
            return;
          } else {
            notice[t] = true;
          }
        }
        if (t == 9 && s.length == 0) {
          var jk = that.data.group[e];
          wx.showModal({
            title: '操作提示',
            content: jk + '不能为空',
            showCancel: false
          })
          return;
        }
      }
      arr.push(s);
    }
    for (var e = 0; e < 2; e++) {
      for (var t = 0; t < 10; t++) {
          box[e].content[t] = false;
        }
    }
    var usm = arr.join('-');
     console.log(usm);
    arr1.push(usm);
    that.setData({
      textArr: arr1,
      boxAdd:box
    });

  },
  notSelect: function (e) {
    var that = this;
    var box = that.data.boxAdd;
    for (var t = 0; t < 2; t++) {
      for (var j= 0; j < 10; j++) {
        box[t].content[j] = !box[t].content[j];
      }
    }
    that.setData({
      boxAdd: box
    })
  },
  allSelect: function () {
    var that = this;
    var box = that.data.boxAdd;
    for (var t = 0; t < 2; t++) {
      for (var j = 0; j < 10; j++) {
        box[t].content[j] = true;
      }
    }
    that.setData({
      boxAdd: box
    })
  },
  clearSelect: function () {
    var that = this;
    var box = that.data.boxAdd;
    for (var t = 0; t < 2; t++) {
      for (var j = 0; j < 10; j++) {
        box[t].content[j] = false;
      }
    }
    that.setData({
      boxAdd: box
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },



  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var t = [];
    var sel = that.data.boxAdd;
    var textArr = that.data.textArr;
    // for (var i = 0; i < sel.length; i++) {
    //   var s = '';
    //   for (var j = 0; j < 10; j++) {
    //     if (sel[i].contetn[j] == true) {
    //       s += j;
    //     }
    //     if (j == 9 && s.length > 0) {
    //       t[i] = s;
    //     }
    //   }
    // }
    // var a = [];
    // if (t.length > 0) {
    //   for (var s = 0; s < t.length; s++) {
    //     if (t[s] != undefined) {
    //       var m = t[s].split('').join(',');
    //       a[s] = m;
    //     }
    //   }
    // }
   
    var tiao = '';
    for (var s = 0; s < textArr.length; s++) {
      if (textArr[s] == undefined) {
      } else {
        if (tiao.length == 0) {
          tiao += 'fenjieshi_0_' + textArr[s];
        } else {
          tiao += '#fenjieshi_0_' + textArr[s];
        }
      }
    }
    // wx.setStorageSync('num', a);
    var group = wx.getStorageSync('group');
    if (group == 0) {
      var tao = wx.getStorageSync('tiao');
      var s = wx.getStorageSync('detail');
      s[21] = true;
      wx.setStorageSync('detail', s);
      tao[21] = tiao;
      wx.setStorageSync('tiao', tao);
    } else {
      var tao = wx.getStorageSync('tiao02');
      var s = wx.getStorageSync('detail02');
      s[19] = true;
      wx.setStorageSync('detail02', s);
      tao[19] = tiao;
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