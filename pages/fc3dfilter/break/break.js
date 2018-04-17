// pages/fc3dfilter/space/space.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '断组',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '断组走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '断组',
      content: '三个数字输入区不允许出现相同的数字，且三个区不会同时出号，至少有一组数字的出号个数为0。如：147-269-0358'
    },
    url:'../../../web/images/tool_8.png',
    val:0,
    group: [
      '第一组', '第二组', '第三组'
    ],
    text:'',
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
    var u = that.data.boxAdd[0].content[1];
    console.log(ind,i,u)
    box[ind].content[i] = !box[ind].content[i];
    var s = box[ind].content[i];
    var itm = "boxAdd[" + ind + "].content[" + i + "]";
    that.setData({
      [itm]: s
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
    for (var e = 0; e < 3; e++) {
     
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
     var usm = arr.join('-');
     for (var e = 0; e < 3; e++) {
       for (var t = 0; t < 10; t++) {
           box[e].content[t] =false;
       }
       }
     arr1.push(usm);
     that.setData({
        textArr:arr1,
        boxAdd:box
     });
    
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
    var textArr = that.data.textArr;
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
    // if (t.length > 0) {
    //   for (var s = 0; s < t.length; s++) {
    //     if (t[s] != undefined) {
    //       var m = t[s].split('').join(',');
    //       a[s] = m;
    //     }
    //   }
    // }
    // console.log(a)

    var tiao = '';
    for (var s = 0; s < textArr.length; s++) {
      if (textArr[s] == undefined) {
      } else {
        if (tiao.length == 0) {
          tiao += 'duanzu_0_' + textArr[s];
        } else {
          tiao += '#duanzu_0_' + textArr[s];
        }
      }
    }
    var group = wx.getStorageSync('group');
    if (group == 0) {
    var s = wx.getStorageSync('detail');
    var tao = wx.getStorageSync('tiao');
    s[14] = true;
    wx.setStorageSync('detail', s);
    tao[14] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var s = wx.getStorageSync('detail02');
      var tao = wx.getStorageSync('tiao02');
      s[12] = true;
      wx.setStorageSync('detail02', s);
      tao[12] = tiao;
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
  diagShow: question.diagShow,
  que: question.que,
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