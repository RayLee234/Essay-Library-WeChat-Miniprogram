const db = wx.cloud.database()

// pages/profiles/profiles.js
Page({

  /**
   * Page initial data
   */
  data: {
    schoolList: ["Princeton", "Harvard", "Columbia", "MIT", "Yale", "Stanford", "UChicago", "UPenn", "Northwestern", "Duke", "Johns Hopkins", "Caltech", "Dartmouth", "Brown", "Notre Dame", "Vanderbilt", "Cornell", "Rice", "Washington St. Louis", "UCLA", "Emory", "UC Berkeley", "USC", "Georgetown", "Carnegie Mellon", "University of Michigan", "Wake Forest", "University of Virginia", "Georgia Tech", "NYU", "Tufts", "UNC", "Rochester"],
    allProfiles: [],
    logoUrl: [
    ["Princeton", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/0.png?sign=d35f47448f2fd287fbfb9709ce1301e9&t=1594197325"],
    ["Harvard", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/1.png?sign=b8ee1cf6f155f1f8ba76358f6b542b7f&t=1594197357"],
    ["Columbia", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/2.png?sign=a892123966389dce8d563582352a9528&t=1594197504"],
    ["MIT", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/3.png?sign=249455af8b6dd98ea0d1cd29352d2734&t=1594197524"],
    ["Yale", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/4.png?sign=d569031487aa14fb15ea7eb35e5113d3&t=1594197541"],
    ["Stanford", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/5.png?sign=e05219c573b888b1b7007dd2ec40ded3&t=1594197552"],
    ["UChicago", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/6.png?sign=c87b019ad3f998e327a026e7407f5abd&t=1594197560"],
    ["UPenn", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/7.png?sign=9842d0601a97a0753c2186f38c0ab375&t=1594197573"],
    ["Northwestern", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/8.png?sign=c0fbeaf956bc66716980ad511ac173a3&t=1594197591"],
    ["Duke", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/9.png?sign=9a1edc2bd49b5f3b281cfda9c56490f5&t=1594197604"],
    ["Johns Hopkins", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/10.png?sign=05c471822ddd386abae188b62e840093&t=1594197624"],
    ["Caltech", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/11.png?sign=d59b81ff405a99f5aff01e2ee3d2f047&t=1594197637"],
    ["Dartmouth", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/12.png?sign=13eabe4d421cad5aa9c4b8358da2e606&t=1594197676"],
    ["Brown", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/13.png?sign=bb42bd491affb4362ff883f70bbd3e05&t=1594197692"],
    ["Notre Dame", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/14.png?sign=feb9a282cef1ff9ee6b361525d141632&t=1594197701"],
    ["Vanderbilt", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/15.png?sign=d9e6f4ebe05f21d8039e1c88578ddbb3&t=1594197714"],
    ["Cornell", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/16.png?sign=4b2852dc41bce9fbe2948aede6b3cce1&t=1594197725"],
    ["Rice", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/17.png?sign=6af9ebb4c8a3aab7ca92155778b2ca61&t=1594197737"],
    ["Washington St. Louis", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/18.png?sign=1ae8ea462f87bf9e8d80600136c136cf&t=1594197750"],
    ["UCLA", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/19.png?sign=e53cf99d3c6b673a5dca949effc45de8&t=1594197770"],
    ["Emory", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/20.png?sign=09195c3fd712b04bf740490506019442&t=1594197785"],
    ["UC Berkeley", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/21.png?sign=cc7f8de00749847d1b230cbc059e3139&t=1594197802"],
    ["USC", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/22.png?sign=8f8666df3c70b9aef554a1aae2140131&t=1594197818"],
    ["Georgetown", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/23.png?sign=43d2e052b1da9a6fab73d3871b3ac382&t=1594197829"],
    ["Carnegie Mellon", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/24.png?sign=68928e459a9ded5f4633f3e1803bebfb&t=1594197838"],
    ["University of Michigan", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/25.png?sign=09f2a58d6f8e7ddc4a153a82847a165d&t=1594197861"],
    ["Wake Forest", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/26.png?sign=3d4c4aa39bc0da2198387f3e9238b80d&t=1594197874"],
    ["University of Virginia", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/27.png?sign=24a9f0113dac279ff06e93265b1d5769&t=1594197886"],
    ["Georgia Tech", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/28.png?sign=dda2381d7fb5012ee522ae066733fdfd&t=1594197896"],
    ["NYU", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/29.png?sign=016f2b378e3a3b7e7d017759bbe3b924&t=1594197907"],
    ["Tufts", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/30.png?sign=02dfd6f73adc3aa133561050bbe4bcfa&t=1594197922"],
    ["UNC", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/31.png?sign=97d834f86349a49f4f967e6d0f5523b5&t=1594197939"],
    ["Rochester", "https://636f-college-assitant-h3d1g-1302512797.tcb.qcloud.la/collegelogos/32.png?sign=30edd83399959b57c60b35930fdd0d22&t=1594197951"] ]
  },

  toSubmit: function() {
    wx.navigateTo({
      url: '../submit/submit',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if(options.num == undefined) {
      db.collection("applicationProfiles").get().then(res => {
        var result = res.data.reverse()
        this.setData({
          allProfiles: result
        })
        for(var i=0;i<result.length;++i)
          for(var j=0;j<33;++j)
            if(this.data.logoUrl[j][0] == result[i].school) {
              this.data.allUrls.push(this.data.logoUrl[j][1])
              break
            }
      })
    }
    else {
      db.collection("applicationProfiles").where({
        school: this.data.schoolList[options.num]
      }).get().then(res => {
        var result = res.data.reverse()
        this.setData({
          allProfiles: result
        })
      })
    }
  },

  gotoEssay: function(e) {
    wx.navigateTo({
      url: '../essay/essay?id=' + e.currentTarget.dataset.id,
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
    if(options.num == undefined) {
      db.collection("applicationProfiles").get().then(res => {
        var result = res.data.reverse()
        this.setData({
          allProfiles: result
        })
        for(var i=0;i<result.length;++i)
          for(var j=0;j<33;++j)
            if(this.data.logoUrl[j][0] == result[i].school) {
              this.data.allUrls.push(this.data.logoUrl[j][1])
              break
            }
      })
    }
    else {
      db.collection("applicationProfiles").where({
        school: this.data.schoolList[options.num]
      }).get().then(res => {
        var result = res.data.reverse()
        this.setData({
          allProfiles: result
        })
      })
    }
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