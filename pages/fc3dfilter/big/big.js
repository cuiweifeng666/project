// pages/fc3dfilter/big/big.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '大小',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '大小走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '大小',
      content: '约定56789为大号、01234为小号。大小的组选形态按大小数的出号量分为4种。大小的直选形态按百十个位所出的大小划分为8种形态。'
    },
    y: {
      sel0: {
        area:'0',
        head:'大数个数',
        select: [0,1,2,3],
        choose: [false, false, false, false],
        bord:true
      },
      sel1: {
        area: '1',
        head: '组选比例',
        select: ['3:0',"2:1",'1:2', '0:3'],
        choose: [false, false, false, false],
        bord: true
      },
      sel2: {
        area: '2',
        head: '直选分布',
        select: ['大大大', "大大小", '大小大', '大小小', '小大大', '小大小', '小小大','小小小'],
        choose: [false, false, false, false, false, false, false, false],
        bord: false
      },
    }
  },
  chooseBtn: function (e) {
      var that = this;
      var sle = e.target.dataset.ch;
      var area = e.target.dataset.area;
      var dat = that.data.y['sel' + area].choose[sle];
      if (area == 0) {
        if (sle == 0) {
          dat = !dat;
          var itm = "y.sel" + area + ".choose[" + sle + "]";
          var itm1 = "y.sel1.choose[3]";
          var itm2 = "y.sel2.choose[7]";
          that.setData({
            [itm]: dat,
            [itm1]: dat,
            [itm2]: dat
          })
        } else if (sle == 1) {
          dat = !dat;
          var itm = "y.sel" + area + ".choose[" + sle + "]";
          var itm1 = "y.sel1.choose[2]";
          var itm2 = "y.sel2.choose[3]";
          var itm3 = "y.sel2.choose[5]";
          var itm4 = "y.sel2.choose[6]";
          that.setData({
            [itm]: dat,
            [itm1]: dat,
            [itm2]: dat,
            [itm3]: dat,
            [itm4]: dat
          })
        } else if (sle == 2) {
          dat = !dat;
          var itm = "y.sel" + area + ".choose[" + sle + "]";
          var itm1 = "y.sel1.choose[1]";
          var itm2 = "y.sel2.choose[1]";
          var itm3 = "y.sel2.choose[2]";
          var itm4 = "y.sel2.choose[4]";
          that.setData({
            [itm]: dat,
            [itm1]: dat,
            [itm2]: dat,
            [itm3]: dat,
            [itm4]: dat
          })
        } else if (sle == 3) {
          dat = !dat;
          var itm = "y.sel" + area + ".choose[" + sle + "]";
          var itm1 = "y.sel1.choose[0]";
          var itm2 = "y.sel2.choose[0]";
          that.setData({
            [itm]: dat,
            [itm1]: dat,
            [itm2]: dat
          })
        }
      } else  if(area == 1) {
        if (sle == 0) {
          dat = !dat;
          var itm = "y.sel" + area + ".choose[" + sle + "]";
          var itm2 = "y.sel2.choose[0]";
          that.setData({
            [itm]: dat,
            [itm2]: dat
          })
        } else if (sle == 1) {
          dat = !dat;
          var itm = "y.sel" + area + ".choose[" + sle + "]";
          var itm2 = "y.sel2.choose[1]";
          var itm3 = "y.sel2.choose[2]";
          var itm4 = "y.sel2.choose[4]";
          that.setData({
            [itm]: dat,
            [itm2]: dat,
            [itm3]: dat,
            [itm4]: dat
          })
        } else if (sle == 2) {
          dat = !dat;
          var itm = "y.sel" + area + ".choose[" + sle + "]";
          var itm2 = "y.sel2.choose[3]";
          var itm3 = "y.sel2.choose[5]";
          var itm4 = "y.sel2.choose[6]";
          that.setData({
            [itm]: dat,
            [itm1]: dat,
            [itm2]: dat,
            [itm3]: dat,
            [itm4]: dat
          })
        } else if (sle == 3) {
          dat = !dat;
          var itm = "y.sel" + area + ".choose[" + sle + "]";
          var itm2 = "y.sel2.choose[7]";
          that.setData({
            [itm]: dat,
            [itm2]: dat
          })
        }
      } else if (area == 2) {
        var itm = "y.sel" + area + ".choose[" + sle + "]";
        dat = !dat;
        that.setData({
          [itm]: dat
        })
      }

  },
  allSelect: function (e) {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    wx.setStorageSync('link', ' https://m.cjcp.com.cn/zst/cjw3d/3d_2numdx-dx.html');
  },
  allSelect: function () {
    var that = this;
    var sel = that.data.y;
    var t = [];
    for (var attr in sel) {
      for (var j = 0; j < sel[attr].choose.length; j++) {
        sel[attr].choose[j] = true;
      }
    }
    that.setData({
      y: sel
    })
  },
  clearSelect: function () {
    var that = this;
    var sel = that.data.y;
    var t = [];
    for (var attr in sel) {
      for (var j = 0; j < sel[attr].choose.length; j++) {
        console.log(sel, attr);
        sel[attr].choose[j] = false;
      }
    }
    that.setData({
      y: sel
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
  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var t = [];
    var sel = that.data.y;
    
    var t = [];
    for (var attr in sel) {
      var s = '';
      for (var j = 0; j < sel[attr].choose.length; j++) {
        if (sel[attr].choose[j] == true) {
          s += j;
        }
        if (j == sel[attr].choose.length-1 && s.length > 0) {
          var slo = sel[attr].area;
          t[slo] = s;
        }
      }
    }
 
    var a = [];
    if (t.length > 0) {
      for (var s = 0; s < t.length; s++) {
        if (t[s] != undefined) {
          var m = t[s].split('').join(',');
          a[s] = m;
        }
      }
    }

    var tiao = '';
    for (var s = 0; s < a.length; s++) {
      if (a[s] == undefined || a[s] == 'none') {
      } else {
        if (tiao.length == 0) {
          tiao += 'daxiao_' + (s ) + '_' + a[s];
        } else {
          tiao += '#daxiao_' + (s ) + '_' + a[s];
        }
      }
    }
    var group = wx.getStorageSync('group');
    if (group == 0) {
    var s = wx.getStorageSync('detail');
    var tao = wx.getStorageSync('tiao');
    s[7] = true;
    wx.setStorageSync('detail', s);
    tao[7] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var s = wx.getStorageSync('detail02');
      var tao = wx.getStorageSync('tiao02');
      s[6] = true;
      wx.setStorageSync('detail02', s);
      tao[6] = tiao;
      wx.setStorageSync('tiao02', tao);
    } 
    wx.navigateBack({
      delta: 1
    })

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  diagShow: question.diagShow,
  que: question.que,
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