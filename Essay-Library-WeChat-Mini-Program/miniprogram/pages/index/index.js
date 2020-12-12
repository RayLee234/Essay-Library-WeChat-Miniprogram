const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj: {}
  },

  getData: function() {
    // db.collection("demoList").get().then(res=>{
    //   this.setData({
    //     dataObj: res.data
    //   })
    // })

    // 查询
    db.collection("demoList").where({
      author: "Ray"
    }).get().then(res=>{
      // console.log(res.data)
      this.setData({
        dataObj: res.data
      })
    }

    )
  },

  addData: function() {
    wx.showLoading({
      title: 'Data is loading',
      mask: true
    })
    // 插入
    db.collection("demoList").add({
      data: {
        title: "test",
        author: "Ray",
        content: "test_content-test_content-test_content-test_content-test_content"
      }
    }).then(res=>{
      wx.hideLoading({})
      console.log(res)
    })
  },

  // submit form
  buttonSubmit: function(res) {
    wx.showLoading({
      title: 'Data submitting',
      mask: true
    })
    db.collection("demoList").add({
      data: res.detail.value
    }).then(res=>{
      console.log(res)
      wx.hideLoading({
        complete: (res) => {},
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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