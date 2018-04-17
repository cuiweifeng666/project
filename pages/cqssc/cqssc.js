// pages/cqssc/cqssc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: 'url',
    userName: ''
  },
  show(){
    let that=this
    wx.setClipboardData({
      data: that.data.userName,
      success(){
        wx.showModal({
          title: '提示',
          content: '复制成功'          
          }) 
        console.log('success')
      }
    })
    
  },
  paster()
  {
    wx.getClipboardData({
      success(res) {
        console.log('success')
      }
    })
  },
  //获取用户输入的用户名
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getData();
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
  
  },

  getData: function () {
    var that = this;
    wx.request({
      url: 'https://m.cjcp.com.cn/kaijiang.php?m=kaijiang&a=addgpkaijianghistory&ltType=cqssc&pageId=1',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          datalist: res.data
        })
      },
      fail:function(err){},
      complete:function(){}
    })

  }
})


