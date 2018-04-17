// // pages/common/roundnooption.js
// var roundnooptionEvent = {

  
  
//   /**
//    * 全选button点击事件监听
//    */
//   setSelected: function (e) {
//     var that = this;
//     var sle = e.target.dataset.group;
//     var dataList = that.data.selectContextList;
//     dataList[sle] = !dataList[sle];
//     that.setData({
//       selectContextList: dataList
//     })    
//   },
//   selectFootNo: function (e) {
//     var that = this;
//     var sle = e.target.dataset.t;
//     var selectFoot = that.data.selectFootList;
//     selectFoot[sle] = !selectFoot[sle];
//     that.setData({
//       selectFootList: dataList
//     })
//   },
//   /**
//   * 清除button点击事件监听
//   */
//   setClear: function (e) {
//     var that = this;
//     var dataList = that.data.selectContextList;
//     for (var i = 0; i < 10; i++) {
//       dataList[i] = false;
//     }
//     that.setData({
//       selectContextList: dataList
//     })   
//   }, 

//   /**
//   * 号码点击事件监听
//   */
//   selectNo: function (e) {
//     var that = this;
//     var s = that.data.numArr
//     var m = e.target.dataset;
//     var y = e.target.dataset.t;
//     var t = e.target.dataset.y;
//     s[y][t] = !s[y][t];
//     that.setData({ numArr: s });
//   }, 
// }

const question = {
  que: function () {
      var that = this;
      var off = that.data.question.off;
      off = false;
      var itm = "question.off";
      
      that.setData({
        [itm]:off
      })
  },
  diagShow: function () {
    var that = this;
    var off = that.data.question.off;
    off = true;
    var itm = "question.off";
    console.log(1);
    that.setData({
      [itm]: off
    })
  }
}

export default question;