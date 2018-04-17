// pages/fc3dfilter/fc3dfilter.js
//获取应用实例  
import question from "../common/roundnooption.js";
var app = getApp();
var filterlist;
var zxfilterlist;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /** 
        * 页面配置 
        */
    h:true,
    val:'',
    val02:'',
    winWidth: 0,
    winHeight: 0,
    gr:1,
    far:0,
    money:0,
    far02: 0,
    money02: 0,
    // tab切换  
    currentTab: 0, 
    numArr: [],
    question: {
      off: false,
      title: '胆码组',
      content: '由0-9个数字组成的数字组合，这组数字中包含几个不确定出的数字，组合起来确定出号。如果设定胆码为123出现次数为3，则生成27注直选：111 112 113 ...，7注组选：112 113 122 ...'
    },
    /**直选过滤条件列表*/
    filterlist:{
      sleOff:true,
      sle: [
        {
          text:'更多',
          imgUrl:'../web/image/tool_4.png'
        }, {
          text: '收起',
          imgUrl: '../web/image/tool_9.png'
        }
      ],
      
      "data": [       
        {
          element:[
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_dm",
              tourl: "../fc3dfilter/subpage/dmz?type=3d",
              title: "胆码组"    
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_dw",
              tourl: "../fc3dfilter/position/position?type=3d",
              title: "定位"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_hz",
              tourl: "../fc3dfilter/numb/numb?type=3d",
              title: "和值"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_hw",
              tourl: "../fc3dfilter/space/space?type=3d",
              title: "和尾"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_kd",
              tourl: "../fc3dfilter/span/span?type=3d",
              title: "跨度"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_lh",
              tourl: "../fc3dfilter/even/even?type=3d",
              title: "连号"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_dzh",
              tourl: "../fc3dfilter/counter/counter?type=3d",
              title: "对子号"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_dx",
              tourl: "../fc3dfilter/big/big?type=3d",
              title: "大小"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_jo",
              tourl: "../fc3dfilter/jiou/jiou?type=3d",
              title: "奇偶"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_zh",
              tourl: "../fc3dfilter/prime/prime?type=3d",
              title: "质合"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_lye",
              tourl: "../fc3dfilter/elected/elected?type=3d",
              title: "012路"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_zxlm",
              tourl: "../fc3dfilter/small/small?type=3d",
              title: "大中小"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_zxlm",
              tourl: "../fc3dfilter/slenum/slenum?type=3d",
              title: "直选两码"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_zuxlm",
              tourl: "../fc3dfilter/slegroup/slegroup?type=3d",
              title: "组选两码"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_dz",
              tourl: "../fc3dfilter/break/break?type=3d",
              title: "断组"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_zdz",
              tourl: "../fc3dfilter/add/add?type=3d",
              title: "最大值"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_zxz",
              tourl: "../fc3dfilter/last/last?type=3d",
              title: "最小值"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_zjz",
              tourl: "../fc3dfilter/middle/middle?type=3d",
              title: "中间值"
            },
            {
              choose: true,
              se:false,
              id: "fc3d_sxdx_zjz",
              tourl: "../fc3dfilter/mean/mean?type=3d",
              title: "均值"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/sum/sum?type=3d",
              title: "两码和"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/couter/couter?type=3d",
              title: "两码差"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/decompose/decompose?type=3d",
              title: "分解式"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/filter/filter?type=3d",
              title: "凹凸"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/remainder/remainder?type=3d",
              title: "余数和"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/product/product?type=3d",
              title: "位积和尾"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/trend/trend?type=3d",
              title: "反位积和尾"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/long/long?type=3d",
              title: "位置间距"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/digital/digital?type=3d",
              title: "数字累加"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/litter/litter?type=3d",
              title: "直选垃圾注"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/map/map?type=3d",
              title: "历史排除"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/double/double?type=3d",
              title: "遗漏值尾"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/single/single?type=3d",
              title: "单选码距值"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/bigSmal/bigSmal?type=3d",
              title: "大小奇偶比"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/special/special?type=3d",
              title: "大小质合比"
            },
            {
              choose: false,
              se:false,
              id: "1",
              tourl: "../fc3dfilter/all/all?type=3d",
              title: "奇偶质合比"
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
      sleOff: true,
      sle: [
        {
          text: '更多',
          imgUrl: '../web/image/tool_4.png'
        }, {
          text: '收起',
          imgUrl: '../web/image/tool_9.png'
        }],
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
              id: "fc3d_sxdx_zuxlm",
              tourl: "../fc3dfilter/slegroup/slegroup?type=3d",
              title: "组选两码"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_dz",
              tourl: "../fc3dfilter/break/break?type=3d",
              title: "断组"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zdz",
              tourl: "../fc3dfilter/add/add?type=3d",
              title: "最大值"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zxz",
              tourl: "../fc3dfilter/last/last?type=3d",
              title: "最小值"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zjz",
              tourl: "../fc3dfilter/middle/middle?type=3d",
              title: "中间值"
            },
                {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zjz",
              tourl: "../fc3dfilter/mean/mean?type=3d",
              title: "均值"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zjz",
              tourl: "../fc3dfilter/sum/sum?type=3d",
              title: "两码和"
            },
            {
              choose: true,
              se: false,
              id: "fc3d_sxdx_zjz",
              tourl: "../fc3dfilter/couter/couter?type=3d",
              title: "两码差"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/decompose/decompose?type=3d",
              title: "分解式"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/remainder/remainder?type=3d",
              title: "余数和"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/product/product?type=3d",
              title: "位积和尾"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/trend/trend?type=3d",
              title: "反位积和尾"
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
              tourl: "../fc3dfilter/map/map?type=3d",
              title: "历史排除"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/bigSmal/bigSmal?type=3d",
              title: "大小奇偶比"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/special/special?type=3d",
              title: "大小质合比"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/all/all?type=3d",
              title: "奇偶质合比"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/allSum/allSum?type=3d",
              title: "遗漏总和尾"
            },
            {
              choose: false,
              se: false,
              id: "1",
              tourl: "../fc3dfilter/far/far?type=3d",
              title: "组选码距值"
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
        }
        
             
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
 
  onLoad: function (options) {
    
    var that = this;
    /** 
     * 获取系统信息 
     */
    wx.setStorageSync('choose', 1);
    var groupThree = false;
    var groupSix = false;
    var groupSelect = [];
    for (var t = 0; t< 10; t++) {
      groupSelect[t] = true;
    }
    var numArr = [];
    for (var i = 0; i < 3; i++) {
      var arr = [];
      for (var j = 0; j < 10; j++) {
        arr[j] = true;
      }
      numArr.push(arr);
    }
    that.setData({
      numArr: numArr,
      groupThree: groupThree,
      groupSix: groupSix,
      groupSelect: groupSelect
    })
    wx.setStorageSync('groupThree', groupThree);
    wx.setStorageSync('groupSix', groupSix);
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    //数据初始化
    // this.setData({ filterlist: filterlist });
    // this.setData({ zxfilterlist: zxfilterlist });
   
  },
  showOrNo: function (e) {
      var that = this;
      var show = e.target.z;
      var num = that.data.filterlist.data;
      var y = e.target.s;
      var s = num[0].element.length;
      for (var i = 0; i < num[0].element.length; i++) {
        if (num[0].element[i].id =='1') {
          num[0].element[i].choose = !num[0].element[i].choose
        }
      }

        num[0].element[s - 2].show = !num[0].element[s - 2].show;
        num[0].element[s - 1].show = !num[0].element[s - 1].show;
        var u = num[0].element[s - 2].show; 
      var itm = "filterlist.data";
      that.setData({
        h: u,
        [itm] :num
      })
  },
  showOr: function (e) {
    var that = this;
    var show = e.target.h;
    var num = that.data.zxfilterlist.data;
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
    var itm = "zxfilterlist.data";
    that.setData({
      h: u,
      [itm]: num
    })
  },
  /*
  * 页面初始化
  */
  groupThree: function () {
    var that = this;
    var groupThree = that.data.groupThree;
    groupThree = !groupThree;
    that.setData({
      groupThree: groupThree
    })
    wx.setStorageSync('groupThree', groupThree);
  
  },
  groupSix: function () {
    var that = this;
    var groupSix = that.data.groupSix;
    groupSix = !groupSix;
    that.setData({
      groupSix: groupSix
    })
    wx.setStorageSync('groupSix', groupSix);
  },
 pageInit:function()
 {
   
 },
 groupSel:function()
 {
    var that = this;
    var group = that.data.groupSelect;
    for (var i = 0; i < 10; i++) {
      group[i] = true; 
    }
    that.setData({
      groupSelect:group
    })
 },
 clearGroup: function () {
      var that = this;
    var group = that.data.groupSelect;
    for (var i = 0; i < 10; i++) {
      group[i] = false; 
    }
    that.setData({
      groupSelect:group
    })
 },
 notGroup: function () {
   var that = this;
   var group = that.data.groupSelect;
   for (var i = 0; i < 10; i++) {
     group[i] = !group[i];
   }
   that.setData({
     groupSelect: group
   })
 },
 clickGroup: function (e) {
   var that = this;
   var sle = e.target.dataset.group;
   var group = that.data.groupSelect;
   group[sle] = !group[sle];
   that.setData({
     groupSelect: group
   })
 },
 getDatasoure: function () {
   var that = this;
   var group = wx.getStorageSync('group');
   if (group == 0) {
   var tao = wx.getStorageSync('tiao');
   var arr = [];
   for (var i = 0; i < tao.length; i++) {
     if (tao[i] != null) {
       arr.push(tao[i]);
     }
   }
   var s;
   if (arr.length > 1) {
      s= arr.join('@');
   } else {
     s = arr[0];
   }
   var numArr = that.data.numArr;
 
   var t1 = '', t2 = '', t3 = '';
     for (var j = 0; j < 10; j++) {
       if (numArr[0][j] == true) {
          t1 += j;
       }
   }
     for (var j = 0; j < 10; j++) {
       if (numArr[1][j] == true) {
         t2 += j;
       }
     }
     for (var j = 0; j < 10; j++) {
       if (numArr[2][j] == true) {
         t3 += j;
       }
     }
   t1 = t1.split('').join(',');
   t2 = t2.split('').join(',');
   t3 = t3.split('').join(',');
  //  console.log(t1);
   console.log(s,t1,t2,t3);
   wx.request({
     url: "https://tools.m.cjcp.com.cn/gl/?m=Data&a=filters",
     header: {
       "Content-Type": "application/x-www-form-urlencoded"
     },
     method: "POST",
     data: {
       hundredNumList: t1,
       tenNumList:t2 ,
       oneNumList: t3,
       strCondition: s,
       isAll: '1'
     },
     success: function (res) {
          var  u = res.data;
        //  console.log(res);
          if (u == '000' || u == '001' || u == '002' || u == '003' || u == '004') {
            wx.showModal({
              title: '过滤结果',
              content: '过滤结果为空',
              showCancel: false
            })
            return;
          }
          var arr = []; 
          var length = u.length;
          var money= length*2;
          var t = u.join(' ');
          that.setData({
            val:t,
            far:length,
            money:money
          })
     }
   })
   } else {
     var tao = wx.getStorageSync('tiao02');
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
     console.log(s);
     var numArr = that.data.numArr;
     var t1 = '', t2 = '', t3 = '';
     for (var j = 0; j < 10; j++) {
       if (numArr[0][j] == true) {
         t1 += j;
       }
     }
     t1 = t1.split('').join(',');
     var groupThree = that.data.groupThree;
     var groupSix = that.data.groupSix;
     var gr = 1;
     if (!groupThree && !groupSix) {
       gr = 1;
     } else if (groupThree && !groupSix) {
       gr = 2;
     } else if (!groupThree && groupSix) {
       gr = 3;
     } else if (groupThree && groupSix) {
       gr = 4;
     } 
     console.log(gr,t1,s);
     wx.request({
       url: "https://tools.m.cjcp.com.cn/gl/?m=Data&a=filters",
       header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       method: "POST",
       data: {
         hundredNumList: t1,
        //  tenNumList: t2,
         typeFlg: gr,
         strCondition: s,
         isAll: '1'
       },
       success: function (res) {
         console.log(res);
         var u = res.data;
         if (u == '000' || u == '001' || u == '002' || u == '003' || u == '004') {
           wx.showModal({
             title: '过滤结果',
             content: '过滤结果为空',
             showCancel: false
           })
           return;
         }
         var arr = [];
         var length = u.length;
         var money = length * 2;
         var t = u.join(' ');
         that.setData({
           val02: t,
           far02: length,
           money02: money
         })
       }
     })
   }
 },
 getDatasoure02: function () {
   var that = this;
   var group = wx.getStorageSync('group');
   if (group == 0) {
   var tao = wx.getStorageSync('tiao'); 
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
   var numArr = that.data.numArr;
   
     var t1 = '', t2 = '', t3 = '';
     for (var j = 0; j < 10; j++) {
       if (numArr[0][j] == true) {
         t1 += j;
       }
     }
     for (var j = 0; j < 10; j++) {
       if (numArr[1][j] == true) {
         t2 += j;
       }
     }
     for (var j = 0; j < 10; j++) {
       if (numArr[2][j] == true) {
         t3 += j;
       }
     }
     t1 = t1.split('').join(',');
     t2 = t2.split('').join(',');
     t3 = t3.split('').join(',');
    //  console.log(s, t1, t2, t3);
     wx.request({
       url: "https://tools.m.cjcp.com.cn/gl/?m=Data&a=filters",
       header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       method: "POST",
       data: {
         hundredNumList: t1,
         tenNumList: t2,
         oneNumList: t3,
         strCondition: s,
         isAll: '2'
       },
       success: function (res) {
         var u = res.data;
         if (u == '000' || u == '001' || u == '002' || u == '003' || u == '004') {
           wx.showModal({
             title: '过滤结果',
             content: '过滤结果为空',
             showCancel: false
           })
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
       }
     })
   } else {
     var tao = wx.getStorageSync('tiao02');
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
     var numArr = that.data.numArr;
     var t1 = '', t2 = '', t3 = '';
     for (var j = 0; j < 10; j++) {
       if (numArr[0][j] == true) {
         t1 += j;
       }
     }
     t1 = t1.split('').join(',');
     var groupThree = that.data.groupThree;
     var groupSix = that.data.groupSix;
     var gr = 1;
     if (!groupThree && !groupSix) {
        gr = 1;
     } else if (groupThree && !groupSix) {
       gr =2;
     } else if (!groupThree && groupSix) {
       gr = 3;
     } else if (groupThree && groupSix) {
       gr = 4;
     } 
     wx.request({
       url: "https://tools.m.cjcp.com.cn/gl/?m=Data&a=filters",
       header: {
         "Content-Type": "application/x-www-form-urlencoded"
       },
       method: "POST",
       data: {
         hundredNumList: t1,
         //  tenNumList: t2,
         //  oneNumList: t3,
         strCondition: s,
         typeFlg :gr,
         isAll: '2'
       },
       success: function (res) {
         var u = res.data;
         if (u == '000' || u == '001' || u == '002' || u == '003' || u == '004') {
           wx.showModal({
             title: '过滤结果',
             content: '过滤结果为空',
             showCancel: false
           })
           return;
         }
         var arr = [];
         var length = u.length;
         var money = length * 2;
         var t = u.join(' ');
         that.setData({
           val02: t,
           far02: length,
           money02: money
         })
       }
     })
   }
 },
 /**
  * 号码切换事件处理
  */
  numberBindEvent:function()
  {

  },
  /** 
     * 滑动切换tab 
     */

  allSelect: function () {
    var that = this;
    /** 
     * 获取系统信息 
     */
    var numArr = [];
    for (var i = 0; i < 3; i++) {
      var arr = [];
      for (var j = 0; j < 10; j++) {
        arr[j] = true;
      }
      numArr.push(arr);
    }
    that.setData({
      numArr: numArr
    })
  },
  notSelect: function () {
    var that = this;
    /** 
     * 获取系统信息 
     */
    var t = that.data.numArr
    var numArr = [];
    for (var i = 0; i < 3; i++) {
      var arr = [];
      for (var j = 0; j < 10; j++) {
        var s = t[i][j];
        t[i][j] = !s;
      }
    }
    that.setData({
      numArr: t
    })
  },
  diagShow:question.diagShow,
  que: question.que,
  show_link: function () {
    wx.navigateTo({
      url: '../instructor/instructor',
    })
  },
  selectCir: function (e) {
    var that = this;
    var s = that.data.numArr
    var m = e.target.dataset;
    var y = e.target.dataset.t;
    var t = e.target.dataset.y;
    s[y][t] = !s[y][t];
    that.setData({ numArr: s }); 
  },
  clearSelect: function () {
    var that = this;
    /** 
     * 获取系统信息 
     */
    var numArr = [];
    for (var i = 0; i < 3; i++) {
      var arr = [];
      for (var j = 0; j < 10; j++) {
        arr[j] = false;
      }
      numArr.push(arr);
    }
    that.setData({
      numArr: numArr
    })
  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
  * 点击tab切换 
  */
  swichNav: function (e) {

    var that = this;
    var group = that.data.currentTab;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
      var s = wx.setStorageSync('group', e.target.dataset.current);
    }
  }, 
  copyNum: function () {
    var that = this;
    var val = that.data.val;
    var val02 = that.data.val02;
    var sou = wx.getStorageSync('group');
    var t;
    if (sou == 0) {
      t = val;
    } else {
      t = val02;
    } 
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
    that.setData({
      currentTab:group
    })
    if (group == 0) {
    var s = wx.getStorageSync('detail');
    var tao = wx.getStorageSync('tiao');
    if (s.length > 0 && s != undefined) {
      for (var t = 0; t < s.length; t++) {
        if (s[t] == true) {
          var itm = "filterlist.data[0].element[" + t +"].se";
          that.setData({
            [itm] : true
          })
        }
      }
    }
    } else {
      var s = wx.getStorageSync('detail02');
      var tao = wx.getStorageSync('tiao02');
      if (s.length > 0 && s != undefined) {
        for (var t = 0; t < s.length; t++) {
          if (s[t] == true) {
            var itm = "zxfilterlist.data[0].element[" + t + "].se";
            that.setData({
              [itm]: true
            })
          }
        }
      }
    }
  },
  deleteCookie: function () {
    var that = this;
    var sel = that.data.currentTab;
    var group = that.data.filterlist.data[0].element;
    var group02 = that.data.zxfilterlist.data[0].element;
    if (sel == 0) {
    for (var i = 0; i < group.length; i++) {
      group[i].se = false;
    }
    var itm = "filterlist.data[0].element";
    that.setData({
      [itm]: group,
      val: '',
      far: 0,
      money: 0
    })
    wx.setStorageSync('detail', []);
    wx.setStorageSync('tiao', []);
    } else {
    for (var i = 0; i < group02.length; i++) {
      group02[i].se = false;
    }
    var itm01 = "zxfilterlist.data[0].element";
    that.setData({
      [itm01]: group02,
      val02: '',
      far02:0,
      money02:0
    })
    wx.setStorageSync('detail02', []);
    wx.setStorageSync('tiao02', []);
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