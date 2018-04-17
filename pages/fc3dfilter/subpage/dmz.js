// pages/fc3dfilter/subpage/dmz.js
import question from "../../common/roundnooption.js";
var selectedList;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: {
      title: '胆码组',
      headOff: 'true',
      titleTrue: 'true',
      headRightTitle: '号码分布走势图',
      headLinkUrl:'../attr/attr?type=3d'
    },
    question: {
      off: false,
      title: '3d福彩过滤工具',
      content: '彩经网过滤工具，全国最专\n业的彩票过滤神器，数万彩民玩彩必备！彩民可根据预设条件对号码进行过滤缩水，操作简单，方便实用。针对各条件附带强大全面的走势图表，实时趋势分析，选择彩经网，玩彩有思路！'
    },
    
    y: {
    'item1': {
    area:'1',
    title: "胆码组1",
    headRightTitle: "号码分布走势图",
    headLinkUrl: "",
    titleTrue:true,
    headRightDisplay: true,
    footerDisplay: true,
    selectedList: [],
    optionOff:false,
    selectContextList: [false, false, false, false, false, false, false, false, false, false],
    selectFootList: [false, false, false, false]
    },
    'item2': {
      area: '2',
      title: "胆码组2",
      headRightTitle: "号码分布走势图",
      headLinkUrl: "",
      titleTrue: false,
      optionOff: false,
      headRightDisplay: true,
      footerDisplay: true,
      selectedList: [],
      selectContextList: [false, false, false, false, false, false, false, false, false, false],
      selectFootList: [false, false, false, false]
    },
    'item3': {
      area: '3',
      title: "胆码组3",
      headRightTitle: "号码分布走势图",
      headLinkUrl: "",
      titleTrue: false,
      optionOff: false,
      headRightDisplay: true,
      footerDisplay: true,
      selectedList: [],
      selectContextList: [false, false, false, false, false, false, false, false, false, false],
      selectFootList: [false, false, false, false]
    },
    }
  },
  
  /*
 *  页面初始化的处理
 */
  pageInit: function () {
    var that = this;
    var selectContextList = [];
    var selectFootList = [];
    
    // for (var i = 1; i < 4; i++) {
    //   var s = 'item'+i;
    //   var dataLi = that.data[s];
    //   var dataList = that.data[s].selectContextList;
    //   for (var t = 0; t < 10; t++) {
    //     dataList[t] = false;
    //   }    
    //   dataLi.selectContextList = dataList;
    //   that.setData({
    //     s: dataLi
    //   })
    // }
    // console.log(that.data)
    //   for (var t = 0; t < 4; t++) {
    //     selectFootList[t] = true;
    //   }
    //}
  },
  /**
   * 全选button点击事件监听
   */
  store: function (e) {
    var  that = this;
  
  },
  notSelect: function (e) {
    var that = this;
    var ind = e.target.dataset.t;
    var s = 'item' + ind;
    var area = e.target.dataset.area
    var gr = e.target.dataset.group;
    var more = that.data.y;
  
    for (var attr in more) {
      // attr.selectContextList
      var ts = [];
      var ty = [];
      for (var t = 0; t < that.data.y[attr].selectContextList.length; t++) {
        ts[t] = true;
      }  
      for (var s = 0; s < that.data.y[attr].selectFootList.length; s++) {
        ty[s] = true;
      }   
      var itm = "y."+attr + ".selectContextList";
      var itm1 = "y." + attr + ".selectFootList";
      that.setData({
        [itm]: ts,
        [itm1]: ty
      })
    }
   
  },
  diagShow: question.diagShow,
  que: question.que,
  /**
  * 清除button点击事件监听
  */
  setClear: function (e) {
    var that = this;
    var ind = e.target.dataset.t;
    var ts = [];
    for (var t = 0; t < 10; t++) {
      ts[t] = false;
    }
    var itm = "y.item" + ind + ".selectContextList";
    that.setData({
      [itm]: ts
    })
  },
  notSelect: function (e) {
    var that = this;
    var ind = e.target.dataset.t;
    var s = 'item' + ind;
    var area = e.target.dataset.area
    var gr = e.target.dataset.group;
    var more = that.data.y;

    for (var attr in more) {
      // attr.selectContextList
      var u = that.data.y[attr].selectContextList;
      var q = that.data.y[attr].selectFootList;
      for (var t = 0; t < u.length; t++) {
        u[t] = !u[t];
      }
      for (var s = 0; s < q.length; s++) {
        q[s] = !q[s];
      }
      var itm = "y." + attr + ".selectContextList";
      var itm1 = "y." + attr + ".selectFootList";
      that.setData({
        [itm]: u,
        [itm1]: q
      })
    }

  },
  allSelect: function (e) {
    var that = this;
    var ind = e.target.dataset.t;
    var s = 'item' + ind;
    var area = e.target.dataset.area
    var gr = e.target.dataset.group;
    var more = that.data.y;

    for (var attr in more) {
      // attr.selectContextList
      var ts = [];
      var ty = [];
      for (var t = 0; t < that.data.y[attr].selectContextList.length; t++) {
        ts[t] = true;
      }
      for (var s = 0; s < that.data.y[attr].selectFootList.length; s++) {
        ty[s] = true;
      }
      var itm = "y." + attr + ".selectContextList";
      var itm1 = "y." + attr + ".selectFootList";
      that.setData({
        [itm]: ts,
        [itm1]: ty
      })
    }
  },
  /**
  * 【出现】号码点击事件监听
  */
  clearSelect: function (e) {
    var that = this;
    var ind = e.target.dataset.t;
    var s = 'item' + ind;
    var area = e.target.dataset.area
    var gr = e.target.dataset.group;
    var more = that.data.y;
    for (var attr in more) {
      var ts = [];
      var ty = [];
      for (var t = 0; t < that.data.y[attr].selectContextList.length; t++) {
        ts[t] = false;
      }
      for (var s = 0; s < that.data.y[attr].selectFootList.length; s++) {
        ty[s] = false;
      }
      var itm = "y." + attr + ".selectContextList";
      var itm1 = "y." + attr + ".selectFootList";
      that.setData({
        [itm]: ts,
        [itm1]: ty
      })
    }
  },
  /**
  * 号码点击事件监听
  */
  selectNo: function (e) {
    var that = this;
    var ind = e.target.dataset.t;
    var s = 'item'+ind;
    var area = e.target.dataset.area
    var gr = e.target.dataset.group;
    var t = that.data.y['item'+ind].selectContextList[gr];
    t = !t; 
    var itm = "y.item" + ind + ".selectContextList["+gr+"]";
    that.setData({
      [itm]: t
    })
  },
  /**
  * 【出现】号码点击事件监听
  */
  selectFootNo: function (e) {
    var that = this;
    var t = e.target.dataset.s;
    var ind = e.target.dataset.t;
    var sel = 'item'+ind;
    var s = that.data.y['item' + ind].selectFootList[t];
       s = !s
       var itm = "y.item" + ind +".selectFootList["+t+"]";
    that.setData({
      [itm]: s 
        });
  },
  cancel: function () {
    // wx.redirectTo({
    //   title: "goback",
    //   url: '../fc3dfilter'
    // })
    wx.navigateBack({
      delta: 1
    })
  },
  sure: function () {
    var that = this;
    var sel = that.data.y;
    var count = that.data.count;
    var t = [];
    var choosePage = wx.getStorageSync('choose');
    for (var attr in sel) {
      var s = '';
      // console.log(attr);
      var m = {
        str1:'',
        str2:''
      };
      for (var j = 0; j < 10; j++) {
        var h = that.data.y[attr + ''].selectContextList;
        if (h[j] == true) {
            s += j;
        }
        if (j == 9 && s.length > 0) {
          m.str1 = s;
        }
      }
      var u = '';
      for (var q = 0; q < count; q++) {
        var se = that.data.y[attr + ''].selectFootList;
        if (se[q] == true) {
            u += q
        }
        if (q == count-1 && u.length > 0) {
          m.str2 = u;
        }
      }
      if (m.str1.length > 0 && m.str2.length == 0) {
        wx.showModal({
          title: '操作提示',
          content: '请填写' + that.data.y[attr + ''].title+'出现条件',
          showCancel: false
        })
        return;
      } else if (m.str1.length == 0 && m.str2.length > 0) {
        wx.showModal({
          title: '操作提示',
          content: '请填写' + that.data.y[attr + ''].title + '出现个数',
          showCancel: false
        })
        return;
      }
       else if (m.str1.length >0 && m.str1.length > 0) {
        var choose = that.data.y[attr + ''].area-1;
        t[choose] = m;
      } else {
        return;
      }
    }
 
  
    for (var i = 0; i < t.length; i++) {
      if (t[i] == undefined) {
        break;
      } 
      for (var attr in t[i]) {
        if (attr == 'str1') {
          var s1 = t[i][attr].split('').join(',');
          t[i][attr] = s1;
        }
        if (attr == 'str2') {
          var s2 = t[i][attr].split('').join(',');
          t[i][attr]  = s2;
        }
      }
    }
  
   var tiao = '';
  //  if (s == undefined) {
     
  //  } else {
  //     tiao = s;
  //  }
    for (var s = 0; s < t.length; s++) {
      if (t[s] == undefined) {
        break;
      } else {
        if (tiao.length == 0) {
         tiao += 'danmazu_0_' + t[s].str1 + '-' + t[s].str2;
        } else {
          tiao += '#danmazu_0_' + t[s].str1 + '-' + t[s].str2;
        }
      }
    }
    if (choosePage == '1') {
      var group = wx.getStorageSync('group');
      if (group == 0) {
        var tao = wx.getStorageSync('tiao');
        var s = wx.getStorageSync('detail');
        s[0] = true;
        wx.setStorageSync('detail', s);
        tao[0] = tiao;
        wx.setStorageSync('tiao', tao);
      } else {
        var tao = wx.getStorageSync('tiao02');
        var s = wx.getStorageSync('tiao02');
        s[0] = true;
        wx.setStorageSync('detail02', s);
        tao[0] = tiao;
        wx.setStorageSync('tiao02', tao);
      }
    } else if (choosePage =='2') {
      var slect = wx.getStorageSync('slectBtn');
      slect[0] = true;  
      wx.setStorageSync('slectBtn', slect);
      var dataGrou = wx.getStorageSync('record');
      dataGrou[0] = tiao;  
      wx.setStorageSync('record', dataGrou);
    }
    wx.navigateBack({
      delta: 1
    })
    // wx.request({
    //   url: "https://tools.m.cjcp.com.cn/gl/?m=Data&a=filters",
    //   data: {
    //     strCondition: 'danmazu_0_' + t[0].str1 + '-' + t[0].str2 + '#danmazu_1_' + t[1].str1 + '-' + t[1].str2 + '#danmazu_2_' + t[2].str1 + '-' +t[2].str2,
    //     isAll: '1'
    //   },
    //   success: function (res) {
    //     console.log(res);
    //     var itm = "num.bigOrd";
    //     that.setData({
    //       [itm]: sel
    //     })
    //   },
    //   fail: function (res) {
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.pageInit();
    var choosePage = wx.getStorageSync('choose');
    if (choosePage == '1') {
      that.setData({
          count:4
      })
      wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjw3d/3d_danxuan.html');
    } else if (choosePage == '2') {
      wx.setStorageSync('link', 'https://m.cjcp.com.cn/zst/cjwpl5/pl5_zst.html');
      that.setData({
        count: 6
      })
      var arr = [false, false, false, false, false, false]
      var ele = that.data.y;
      for (var attr in ele) {
        // ele[attr].selectFootList = arr;
        var ele = "y." + attr +".selectFootList";
        that.setData({
          [ele]:arr
        })
      }
      
    }
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})