const db = wx.cloud.database()

// pages/essay/essay.js
Page({
  /**
   * Page initial data
   */
  data: {
    PS: [],
    PS_paras: [],
    otherEssays: [],
    school: '',
    PSValid: false,
    valid: new Array(20)
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    db.collection("applicationProfiles").doc(options.id).get().then(res => {
      this.setData({
        PS: res.data.personalStatement,
        otherEssays: res.data.supplementalEssays,
        school: res.data.school
      })
      var jud = [ [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [] ], PSJud = false
      if(res.data.personalStatement.content != null && res.data.personalStatement.content != undefined && res.data.personalStatement.content.length > 250 && res.data.personalStatement.text != null && res.data.personalStatement.text != undefined) PSJud = true
      if(PSJud) {
        let flag = false
        for(var i=0;i<res.data.personalStatement.content.length;++i)
          if(res.data.personalStatement.content[i] != ' ') {
            flag = true
            break
          }
        this.setData({
          PSValid: flag
        })
      }
      for(var i=0;i<20;++i) {
        for(var j=0;j<res.data.supplementalEssays[i].content.length;j++) {
          if(res.data.supplementalEssays[i].content[j] != null && res.data.supplementalEssays[i].content[j] != undefined && res.data.supplementalEssays[i].content[j].length > 0 && res.data.supplementalEssays[i].text[j] != null && res.data.supplementalEssays[i].text[j] != undefined) jud[i].push(true)
          else jud[i].push(false)
          if(jud[i][j]) {
            let flag = false
            for(var k=0;k<res.data.supplementalEssays[i].content[j].length;k++)
              if(res.data.supplementalEssays[i].content[j][k] != ' ') {
                flag = true
                break
              }
              jud[i][j] = flag
          }
        }
      }
      this.setData({
        valid: jud
      })
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})