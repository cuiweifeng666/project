// pages/rwfilter/rwfilter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    h:false,
    filterlist: {
      sleOff: true,
      sle: [
        {
          text: '更多',
          imgUrl: '../web/image/tool_4.png'
        }, {
          text: '收起',
          imgUrl: '../web/image/tool_9.png'
        }
      ],
      "data": [
        {
          element: [
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_dm",
              tourl: "../fc3dfilter/subpage/dmz?type=3d",
              title: "胆码组"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_dw",
              tourl: "../rwfilter/position2/position?type=3d",
              title: "定位"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_hz",
              tourl: "../fc3dfilter/numb/numb?type=3d",
              title: "和值"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_hw",
              tourl: "../fc3dfilter/space/space?type=3d",
              title: "和尾"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_lh",
              tourl: "../fc3dfilter/mean/mean?type=3d",
              title: "均值"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_kd",
              tourl: "../fc3dfilter/span/span?type=3d",
              title: "跨度"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_lh",
              tourl: "../fc3dfilter/even/even?type=3d",
              title: "连号"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_dzh",
              tourl: "../fc3dfilter/counter/counter?type=3d",
              title: "对子号"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_dx",
              tourl: "../fc3dfilter/big/big?type=3d",
              title: "大小"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_jo",
              tourl: "../fc3dfilter/jiou/jiou?type=3d",
              title: "奇偶"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zh",
              tourl: "../fc3dfilter/prime/prime?type=3d",
              title: "质合"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_lye",
              tourl: "../fc3dfilter/elected/elected?type=3d",
              title: "012路"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zxlm",
              tourl: "../fc3dfilter/small/small?type=3d",
              title: "大中小"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_lh",
              tourl: "../fc3dfilter/sum/sum?type=3d",
              title: "两码和"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_lh",
              tourl: "../fc3dfilter/couter/couter?type=3d",
              title: "两码差"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_lh",
              tourl: "../fc3dfilter/remainder/remainder?type=3d",
              title: "余数和"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_lh",
              tourl: "../fc3dfilter/product/product?type=3d",
              title: "位积和尾"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_lh",
              tourl: "../fc3dfilter/trend/trend?type=3d",
              title: "反位积和尾"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zdz",
              tourl: "../fc3dfilter/add/add?type=3d",
              title: "最大值"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/last/last?type=3d",
              title: "最小值"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/middle/middle?type=3d",
              title: "中间值"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/long/long?type=3d",
              title: "位置间距"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/digital/digital?type=3d",
              title: "数字累加"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/litter/litter?type=3d",
              title: "直选垃圾注"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/map/map?type=3d",
              title: "历史排除"
            },

            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/decompose/decompose?type=3d",
              title: "出号个数"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/filter/filter?type=3d",
              title: "区间"
            },
            {
              show: true,
              imgtour: '../../web/images/tool_4.png',
              id: "fc3d_sxdx_zjz",
              tourl: "",
              title: "更多"
            },
            {
              show: false,
              imgtour: '../../web/images/tool_9.png',
              id: "fc3d_sxdx_zjz",
              tourl: "",
              title: "收起"
            }
          ]
        },
      ]
    },

    /**组选过滤条件列表*/
    zxfilterlist: {
      
      circle: [
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,],
        [false, false, false, false, false, false, false, false, false, false,]        
      ],
    
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('choose', 2);
    wx.setStorageSync('slectBtn', []);
    wx.setStorageSync('record', []);
    var that = this;
   
    var circle = that.data.zxfilterlist.circle;
    for (var t = 0; t < circle.length; t++) {
      for (var s = 0; s < circle[t].length; s++) {
        circle[t][s] = true;
      }
    }
    var itm1 = "zxfilterlist.circle";
    that.setData({
      [itm1]: circle
    })
  },
  showOrNo: function (e) {
    var that = this;
    var show = e.target.z;
    var num = that.data.filterlist.data;
    var y = e.target.s;
    var s = num[0].element.length;
    for (var i = 0; i < num[0].element.length; i++) {
      if (num[0].element[i].id == '1') {
        num[0].element[i].choose = !num[0].element[i].choose
      }
    }
    num[0].element[s - 2].show = !num[0].element[s - 2].show;
    num[0].element[s - 1].show = !num[0].element[s - 1].show;
    var u = num[0].element[s - 2].show;
    var itm = "filterlist.data";
    that.setData({
      h: u,
      [itm]: num
    })
  },
  copyNum: function () {
    var that = this;
    var val = that.data.val;
    var t;
      t = val;
    if (t == '') {
      wx.showModal({
        title: '彩经提示',
        content: '内容为空',
        showCancel: false
      })
      return;
    }
    wx.setClipboardData({
      data: t,
      success: function (res) {
        wx.showModal({
          title: '彩经提示',
          content: '复制成功',
          showCancel: false
        })
      }
    })
  },
  deleteCookie: function () {
    var that = this;
    var slect = wx.getStorageSync('slectBtn');
    var itm1 = "zxfilterlist.circle";
    var ele = that.data.filterlist.data[0].element
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].se != undefined) {
        if (slect[i] == true) {
          ele[i].se = false;
        }
      }
    }

    var itm = "filterlist.data[0].element";
    that.setData({
      [itm]: ele,
      val: '',
      far: 0,
      money: 0
    })
    wx.setStorageSync('slectBtn', []);
    wx.setStorageSync('record', []);
    


  },
  getDatasoure: function () {
    var that = this;
    wx.showLoading({
      mask:false,
      title: '数据加载中',
    })
    var tao = wx.getStorageSync('record');
    console.log(tao)
      var arr = [];
      for (var i = 0; i < tao.length; i++) {
        if (tao[i] != null) {
          arr.push(tao[i]);
        }
      }
      var s;
      if (arr.length > 1) {
        s = arr.join('@');
      } else {
        s = arr[0];
      }
      var numArr = that.data.zxfilterlist.circle;

      var t1 = '', t2 = '', t3 = '',t4 = '', t5 = '';
      for (var j = 0; j < 10; j++) {
        if (numArr[0][j] == true) {
          t1 += j;
        }
        if (numArr[1][j] == true) {
          t2 += j;
        }
        if (numArr[2][j] == true) {
          t3 += j;
        }
        if (numArr[3][j] == true) {
          t4 += j;
        }
        if (numArr[4][j] == true) {
          t5 += j;
        }
      }

      t1 = t1.split('').join(',');
      t2 = t2.split('').join(',');
      t3 = t3.split('').join(',');
      t4 = t4.split('').join(',');
      t5 = t5.split('').join(',');
      console.log(s, t1, t2, t3, t4, t5);
      wx.request({
        url: "https://tools.m.cjcp.com.cn/gl/?m=DataPlw&a=filters",
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: {
          wanNumList:t1,
          thousandNumList:t2,
          hundredNumList:t3,
          tenNumList: t4,
          oneNumList: t5,
          strCondition: s,
          isAll: '1'
        },
        success: function (res) {
         
          var u = res.data;
          //  console.log(res);
          if (u == '000' || u == '001' || u == '002' || u == '003' || u == '004' || u == '005' || u == '006') {
            wx.showModal({
              title: '过滤结果',
              content: '过滤结果为空',
              showCancel: false
            })
            wx.hideLoading();
            return;
          }
          var arr = [];
          var length = u.length;
          var money = length * 2;
          var t = u.join(' ');
          that.setData({
            val: t,
            far: length,
            money: money
          })
          wx.hideLoading();
        },
        fail: function () {
          wx.hideLoading();
        }
      })
  },
  getDatasoure02: function () {
    var that = this;
    wx.showLoading({
      mask: false,
      title: '数据加载中',
    })
    var tao = wx.getStorageSync('record');
    console.log(tao)
    var arr = [];
    for (var i = 0; i < tao.length; i++) {
      if (tao[i] != null) {
        arr.push(tao[i]);
      }
    }
    var s;
    if (arr.length > 1) {
      s = arr.join('@');
    } else {
      s = arr[0];
    }
    var numArr = that.data.zxfilterlist.circle;

    var t1 = '', t2 = '', t3 = '', t4 = '', t5 = '';
    for (var j = 0; j < 10; j++) {
      if (numArr[0][j] == true) {
        t1 += j;
      }
      if (numArr[1][j] == true) {
        t2 += j;
      }
      if (numArr[2][j] == true) {
        t3 += j;
      }
      if (numArr[3][j] == true) {
        t4 += j;
      }
      if (numArr[4][j] == true) {
        t5 += j;
      }
    }

    t1 = t1.split('').join(',');
    t2 = t2.split('').join(',');
    t3 = t3.split('').join(',');
    t4 = t4.split('').join(',');
    t5 = t5.split('').join(',');
    console.log(s, t1, t2, t3);
    wx.request({
      url: "https://tools.m.cjcp.com.cn/gl/?m=DataPlw&a=filters",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        wanNumList: t1,
        thousandNumList: t2,
        hundredNumList: t3,
        tenNumList: t4,
        oneNumList: t5,
        strCondition: s,
        isAll: '2'
      },
      success: function (res) {

        var u = res.data;
        //  console.log(res);
        if (u == '000' || u == '001' || u == '002' || u == '003' || u == '004' || u == '005' || u == '006') {
          wx.showModal({
            title: '过滤结果',
            content: '过滤结果为空',
            showCancel: false
          })
          wx.hideLoading();
          return;
        }
        var arr = [];
        var length = u.length;
        var money = length * 2;
        var t = u.join(' ');
        that.setData({
          val: t,
          far: length,
          money: money
        })
        wx.hideLoading();
      },
      fail: function () {
        wx.hideLoading();
      }
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
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#AAF'
    // })

    var that = this;
    // console.log( wx.getStorageSync('record'))
    var slect = wx.getStorageSync('slectBtn');
    var ele = that.data.filterlist.data[0].element
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].se != undefined) {
        if (slect[i] == true) {
          ele[i].se  = true;
        }
      }
    }
    var itm = "filterlist.data[0].element"
    that.setData({
      [itm]:ele,
    })
    console.log(that.data.zxfilterlist.circle)
  },
  selectCir: function (e) {
      var that = this;
      var circle = that.data.zxfilterlist.circle;
      var ind = e.target.dataset.t;
      var y = e.target.dataset.y;
      circle[ind][y] = !circle[ind][y];
      var itm = "zxfilterlist.circle["+ind+"]["+y+"]";
      that.setData({
        [itm]: circle[ind][y] 
      }) 
  },
  allSelect: function () {
    var that = this;
    var circle = that.data.zxfilterlist.circle;
    for (var t = 0; t < circle.length; t++) {
      for (var s = 0; s < circle[t].length;s++) {
        circle[t][s] = true;
      }
    }
    var itm = "zxfilterlist.circle";
    that.setData({
      [itm]: circle
    }) 
  },
  notSelect: function () {
    var that = this;
    var circle = that.data.zxfilterlist.circle;
    for (var t = 0; t < circle.length; t++) {
      for (var s = 0; s < circle[t].length; s++) {
        circle[t][s] = !circle[t][s];
      }
    }
    var itm = "zxfilterlist.circle";
    that.setData({
      [itm]: circle
    })
  },
  clearSelect: function () {
    var that = this;
    var circle = that.data.zxfilterlist.circle;
    for (var t = 0; t < circle.length; t++) {
      for (var s = 0; s < circle[t].length; s++) {
        circle[t][s] = false;
      }
    }
    var itm = "zxfilterlist.circle";
    that.setData({
      [itm]: circle
    })
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