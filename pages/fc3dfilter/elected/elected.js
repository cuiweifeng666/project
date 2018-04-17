// pages/fc3dfilter/big/big.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '012路',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '012路走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '012路',
      content: '0到9被3除余数为0的为：0369；余1的为：147；余2的为258。012路的组选形态按012路的出号量分为10种。012路的直选形态按百十个位所出的012路划分为27种形态。'
    },
    y: {
      sel0: {
        area:'0',
        head:'0数个数',
        select: ['0个','1个','2个','3个'],
        choose: [false, false, false, false],
        bord:true
      },
      sel1: {
        area: '1',
        head: '1数个数',
        select: ['0个', '1个', '2个', '3个'],
        choose: [false, false, false, false],
        bord: true
      },
      sel2: {
        area: '2',
        head: '2数个数',
        select: ['0个', '1个', '2个', '3个'],
        choose: [false, false, false, false],
        bord: true
      },
      sel3: {
        area: '3',
        head: '组选比例',
        select: ['3:0:0', '2:1:0', '2:0:1', '1:2:0', '1:0:2', '1:1:1', '0:3:0', '0:2:1', '0:1:2', '0:0:3'],
        choose: [false, false, false, false, false, false, false, false, false, false],
        bord: true
      },
      // sel4: {
      //   area: '4',
      //   head: '直选分布',
      //   select: ['000', '001', '002', '010', '011', '012', '020', '021', '022', '100', '101', '102', '110', '111', '112', '120', '121', '122', '200', '201', '202', '210', '211', '212', '220', '221', '222'],
    //   bord: true
      // },
   
    },
    arr: [
      [
        {
          n1: [6,7,8,9],
          n2: [13, 14, 16, 17, 22, 23, 25, 26]
        },
        {
          n1: [3,4,5],
          n2: [4, 5, 7, 8, 10, 11, 12, 15, 19, 20, 21, 24]
        },
        {
          n1: [1,2],
          n2: [1,2,3,6,9,18]
        },
        {
          n1: [0],
          n2: [0]
        },
      ],
      [
        {
          n1: [0,2,4,9],
          n2: [0,2,6,8,18,20,24,26]
        },
        {
          n1: [1,5,8],
          n2: [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]
        },
        {
          n1: [3,7],
          n2: [4,10,12,14,16,22]
        },
        {
          n1: [6],
          n2: [13]
        },
      ],
      [
        {
          n1: [0, 1, 3,6],
          n2: [0, 1, 3,4,9,10,12,13]
        },
        {
          n1: [2, 5, 7],
          n2: [2, 5, 6, 7, 11, 14, 15, 16, 18, 19, 21, 22]
        },
        {
          n1: [4,8],
          n2: [8,17,20,23,24,25]
        },
        {
          n1: [9],
          n2: [26]
        },
      ]
      
    
    ]
  },
  notSelect: function () {
    var that = this;
    var sel = that.data.y;
    var t = [];
    var num = 0;
    for (var attr in sel) {
      var s = [];
      for (var j = 0; j < sel[attr].choose.length; j++) {
        sel[attr].choose[j] = !sel[attr].choose[j];
      }
      t[num] = s;
      num++;
    }
    that.setData({
      y: sel
    })
  },
  allSelect: function () {
    var that = this;
    var sel = that.data.y;
    var t = [];
    var num = 0;
    for (var attr in sel) {
      var s = [];
      for (var j = 0; j < sel[attr].choose.length; j++) {
        sel[attr].choose[j] = true;
      }
      t[num] = s;
      num++;
    }
    that.setData({
      y: sel
    })
  },
  clearSelect: function () {
    var that = this;
    var sel = that.data.y;
    var t = [];
    var num = 0;
    for (var attr in sel) {
      var s = [];
      for (var j = 0; j < sel[attr].choose.length; j++) {
        sel[attr].choose[j] = false;
      }
      t[num] = s;
      num++;
    }
    that.setData({
      y: sel
    })
  },
  chooseBtn: function (e) {
    var that = this;
    var sle = e.target.dataset.ch;
    var area = e.target.dataset.area;
    var data = that.data.arr;
    var dat = that.data.y['sel' + area].choose[sle];
    dat = !dat;
    var itm = "y.sel"+ area+".choose["+sle+"]";
    if (area < 3) {
      var t = that.data.y.sel3.choose;
      for (var j = 0; j < that.data.arr[area][sle].n1.length; j++) {
        for (var s = 0; s < t.length; s++) {
          if (that.data.arr[area][sle].n1[j] == s) {
            t[s] = dat; 
          }
        }
      }
      if (Object.keys(that.data.y).length>4) {
        var u = that.data.y.sel4.choose ;
        var itm1 = "y.sel4.choose";
      for (var j = 0; j < that.data.arr[area][sle].n2.length; j++) {
        for (var s = 0; s < u.length; s++) {
          if (that.data.arr[area][sle].n2[j] == s) {
             u[s] = dat;
          }
        }
      }
     
      var itm2 = "y.sel4.choose";
      that.setData({
        [itm2]: u
      })
      }
      var itm1 = "y.sel3.choose";
      that.setData({
        [itm1]:t,
      })
      
    }
    that.setData({
      [itm]: dat
    })
    
  },
  
  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var sel = that.data.y;
    var t = [];
    var num = 0;
    for (var attr in sel) {
      var s = [];
      for (var j = 0; j < sel[attr].choose.length; j++) {
        if (sel[attr].choose[j] == true) {
          s.push(j);
        }
        // if (j == sel[attr].choose.length - 1 && s.length > 0) {
        //   var slo = sel[attr].area;
          
        // }
      }
      t[num] = s;
      num++;
    }
    var a = [];
    if (t.length > 0) {
      for (var s = 0; s < t.length; s++) {
        if (t[s] != undefined) {
          var m = t[s].join(',');
          a[s] = m;
        }
      }
    }
  //  console.log(a);
    var tiao = '';
    for (var s = 0; s < a.length; s++) {
      if (a[s] == undefined || a[s] == '') {
      } else {
        if (tiao.length == 0) {
          tiao += 'lyerlu_' + (s) + '_' + a[s];
        } else {
          tiao += '#lyerlu_' + (s) + '_' + a[s];
        }
      }
    }
    console.log(tiao)
    var group = wx.getStorageSync('group');
    var tao = wx.getStorageSync('tiao');
    if (group == 0) {
    var s = wx.getStorageSync('detail');
    s[10] = true;
    wx.setStorageSync('detail', s);
    tao[10] = tiao;
    wx.setStorageSync('tiao', tao);
    } else {
      var s = wx.getStorageSync('detail02');
      var tao = wx.getStorageSync('tiao02');  
      s[9] = true;
      wx.setStorageSync('detail02', s);
      tao[9] = tiao;
      wx.setStorageSync('tiao02', tao);
    } 
    wx.navigateBack({
      delta: 1
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_dx012.html')
  },
  diagShow: question.diagShow,
  que: question.que,
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      var that = this;
      var group = wx.getStorageSync('group');
      if (group == 0) {
        var s = {
          area: '4',
          head: '直选分布',
          select: ['000', '001', '002', '010', '011', '012', '020', '021', '022', '100', '101', '102', '110', '111', '112', '120', '121', '122', '200', '201', '202', '210', '211', '212', '220', '221', '222'],
          choose: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
         bord: true
        };
        var itm = "y.sel4";
        that.setData({
          [itm]: s
        })
        
      }
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