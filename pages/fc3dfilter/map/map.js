// pages/fc3dfilter/numb/numb.js
import question from "../../common/roundnooption.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title:'历史排除',
      headOff: false,
      titleTrue:'true',
      headRightTitle:'历史排除走势图',
      headLinkUrl: '../attr/attr?type=3d'
    },
    int01:'',
    sle: [false, false, false, false, false, false, false, false, false, false],
    boxAdd: {
      box:null
    },
    question: {
      off: false,
      title: '历史排除',
      content: '排除历史最近N期号码。直选、组选最多100期，和值最多50期，跨度、和尾、百位、十位、个位最多20期。'
    },
    sel: {
      many: [0,],
      ele: [
        {name:'直选排除',
          val:'',
          num:0,
        }, {
          name:'组选排除',
          num: 1,
          focus:false,
          val: ''
          }
        , {
          name: '跨度排除',
          num: 2,
          focus: false,
          val: ''
        },  {
          name: '和值排除',
          focus: false,
          num: 3,
          val: ''
        }
        ,   {
          name: '和尾排除',
          focus: false,
          num: 4,
          val: ''
        }
        , {
          name: '百位排除' ,
          focus: false,
          num: 5,
          val: ''
        },  {
          name: '十位排除',
          focus: false,
          num:6,
          val: ''
        }
        ,  {
          name: '个位排除',
          focus: false,
          num:7,
          val: ''
        }
        ]
    
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
    var group = wx.getStorageSync('group');
    console.log(group);
    if (group == 0) {
      var ele = [
        {
          name: '直选排除',
          val: '',
          num: 0,
        }, {
          name: '组选排除',
          num: 1,
          focus: false,
          val: ''
        }
        , {
          name: '跨度排除',
          num: 2,
          focus: false,
          val: ''
        }, {
          name: '和值排除',
          focus: false,
          num: 3,
          val: ''
        }
        , {
          name: '和尾排除',
          focus: false,
          num: 4,
          val: ''
        }
        , {
          name: '百位排除',
          focus: false,
          num: 5,
          val: ''
        }, {
          name: '十位排除',
          focus: false,
          num: 6,
          val: ''
        }
        , {
          name: '个位排除',
          focus: false,
          num: 7,
          val: ''
        }
      ]
      var itm = "sel.ele";
      that.setData({
        [itm]: ele
      })
    } else {
      var three = wx.getStorageSync('groupThree');
      console.log(three)
      var six = wx.getStorageSync('groupSix');
      var ele = null;
      if ((three && !six )|| (!three && six) ){
        ele = [
          {
            name: '直选排除',
            num: 0,
            focus: false,
            val: ''
          }
          , {
            name: '组选排除',
            num: 1,
            focus: false,
            val: ''
          }, {
            name: '跨度排除',
            focus: false,
            num: 2,
            val: ''
          }
          ,{
            name: '和值排除',
            focus: false,
            num: 3,
            val: ''
          }
          , {
            name: '和尾排除',
            focus: false,
            num: 4,
            val: ''
          }, {
            name: '百位排除',
            focus: false,
            num: 5,
            val: ''
          }, {
            name: '十位排除',
            focus: false,
            num:6,
            val: ''
          }, {
            name: '个位排除',
            focus: false,
            num: 7,
            val: ''
          }

        ]
      } else {
        ele = [
          {
            name: '组选排除',
            num: 1,
            focus: false,
            val: ''
          }
          , {
            name: '跨度排除',
            num: 2,
            focus: false,
            val: ''
          }, {
            name: '和值排除',
            focus: false,
            num: 3,
            val: ''
          }
          , {
            name: '和尾排除',
            focus: false,
            num: 4,
            val: ''
          }

        ]
      } 

     
      var itm = "sel.ele";
      that.setData({
        [itm]: ele
      })
    } 
   
  },
  numChange: function (e) {
      var that = this;
      var ind = e.target.detail.i;
      var dat = that.data.sle;
      for (var t = 0; t > dat.length; t++) {
        if (t == ind) {
          dat[ind] = true;
        } else {
          dat[t] = false;
        }
      }
      that.setData({
        sle:dat
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  userNameInput: function (e) {
    var that = this;
    var ch = e.target.dataset.ch;
    var s = e.detail.value;
    var item = that.data.sel.ele[ch];
    var itm = "sel.ele[" + ch+"].val";
    that.setData({
      [itm]: s
    })

  },
  diagShow: question.diagShow,
  que: question.que,
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
  
  notSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    for (var t = 0; t < box.length; t++) {
      box[t] = !box[t];
      }
    var itm = "boxAdd.box";
    that.setData({
      [itm]: box
    })
  },
  listener: function (e) {
        var that = this;
        var i = e.target.dataset.ch;
        var data = that.data.sel.ele;
        
        for (var t = 0; t < data.length; t++) {
          if (i == t) {
            data[t].focus = true; 
          } else {
            data[t].focus = false;
          }
        }
        that.setData({
          data: data
        })
  },
  allSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    for (var t = 0; t < box.length; t++) {
      box[t] = true;
    }
    var itm = "boxAdd.box";
    that.setData({
      [itm]: box
    })
  },
  clearSelect: function () {
    var that = this;
    var box = that.data.boxAdd.box;
    for (var t = 0; t < box.length; t++) {
      box[t] = false;
    }
    var itm = "boxAdd.box";
    that.setData({
      [itm]: box
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
  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var content = that.data.sel.ele;
    var arr = [];
    for (var t = 0; t < content.length; t++) {
      if (content[t].val != '') {
        arr.push(content[t].val);
      }
    }
    var s = '';
    if (arr.length > 0) {
      for (var t = 0; t < arr.length; t++) {
        if (t == 0) {
          s += "lspc_" + t + "_"+arr[t];
        } else {
          s += "#lspc_" + t + "_" + arr[t];
        } 
      }
    }
    var tiao = '';
    tiao =  s;
    console.log(tiao)
    var group = wx.getStorageSync('group');
    if (group == 0) {
      var tao = wx.getStorageSync('tiao');
      var s = wx.getStorageSync('detail');
      s[29] = true;
      wx.setStorageSync('detail', s);
      tao[29] = tiao;
      wx.setStorageSync('tiao', tao);
    } else {
      var s = wx.getStorageSync('detail02');
      var tao = wx.getStorageSync('tiao02');
      s[25] = true;
      wx.setStorageSync('detail02', s);
      tao[25] = tiao;
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
        var that = this;
        
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