const db = wx.cloud.database()

Page({
  data: {
    schoolList: [
      ["Princeton", "princeton", "Princeton University", "Princeton university", "princeton university", "普林斯顿", "普林斯顿大学", "普林"],
      ["Harvard", "harvard", "Harvard University", "Harvard university", "harvard university", "哈佛", "哈佛大学"],
      ["Columbia", "columbia", "Columbia University", "Columbia university", "Columbia University in the City of New York", "columbia university", "哥伦比亚", "哥大", "哥伦比亚大学"],
      ["MIT", "mit", "Massachusetts Institute of Technology", "麻省理工", "麻省理工学院", "麻省理工大学", "麻省"],
      ["Yale", "yale", "Yale University", "Yale university", "yale university", "耶鲁", "耶鲁大学"],
      ["Stanford", "stanford", "Stanford University", "Stanford university", "stanford university", "斯坦福", "斯坦福大学"],
      ["UChicago", "uchicago", "Chicago", "chicago", "University of Chicago", "university of chicago", "芝大", "芝加哥大学", "芝加哥"],
      ["UPenn", "upenn", "Penn", "penn", "Wharton", "wharton", "University of Pennsylvania", "university of pennsylvania", "宾大", "宾夕法尼亚大学", "沃顿", "沃顿商学院"],
      ["Northwestern", "northwestern", "Northwestern University", "Northwestern university", "northwestern university", "西北", "西北大学"],
      ["Duke", "duke", "Duke University", "Duke university", "duke university", "杜克", "杜克大学"],
      ["Johns Hopkins", "jhu", "JHU", "johns hopkins", "John Hopkins", "john hopkins", "John's Hopkins", "john's hopkins", "Johns Hopkins University", "John Hopkins University", "John's Hopkins University", "约翰霍普金斯", "约翰霍普金斯大学", "约翰斯霍普金斯", "约翰斯霍普金斯大学"],
      ["Caltech", "cit", "CIT", "caltech", "California Institute of Technology", "加州理工", "加州理工大学", "加州理工学院"],
      ["Dartmouth", "dartmouth", "Dartmouth College", "Dartmouth college", "dartmouth college", "Dartmouth University", "Dartmouth university", "dartmouth university", "达特茅斯", "达茅", "达特茅斯大学", "达特茅斯学院"],
      ["Brown", "brown", "Brown University", "Brown university", "brown university", "布朗", "布朗大学"],
      ["Notre Dame", "notre dame", "University of Notre Dame", "university of notre dame", "圣母", "圣母大学"],
      ["Vanderbilt", "vanderbilt", "Vanderbilt University", "Vanderbilt university", "vanderbilt university", "范德堡", "范德堡大学"],
      ["Cornell", "cornell", "Cornell University", "Cornell university", "cornell university", "康奈尔", "康奈尔大学"],
      ["Rice", "rice", "Rice University", "Rice university", "rice university", "莱斯", "莱斯大学"],
      ["Washington St. Louis", "WUSTL", "wustl", "Washington University in St. Louis", "Washington University in St Louis"],
      ["UCLA", "ucla", "UC Los Angeles", "University of California, Los Angeles", "University of California Los Angeles", "加州大学洛杉矶分校"],
      ["Emory", "emory", "Emory University", "Emory university", "emory university", "埃默里", "埃默里大学"],
      ["UC Berkeley", "ucb", "UCB", "uc berkeley", "UC berkeley", "University of California, Berkeley", "University of California Berkeley", "伯克利", "伯克利大学", "加州大学伯克利分校"],
      ["USC", "usc", "University of Southern California", "university of southern california", "南加大", "南加州", "南加州大学"],
      ["Georgetown", "georgetown", "Georgetown University", "Georgetown university", "georgetown university", "乔治城大学", "乔治城"],
      ["Carnegie Mellon", "cmu", "CMU", "carnegie mellon", "Carnegie Mellon University", "carnegie mellon university", "卡梅", "卡内基梅隆", "卡耐基梅隆", "卡内基梅隆大学", "卡耐基梅隆大学"],
      ["University of Michigan", "umich", "UMich", "university of michigan", "Michigan", "michigan", "密西根大学", "密歇根大学", "密西根", "密歇根"],
      ["Wake Forest", "wake forest", "Forest", "Wake Forest University", "wake forest university", "维克森林", "维克森林大学"],
      ["University of Virginia", "UVA", "uva", "university of virginia", "UV", "Virginia", "virginia", "UVirginia", "uVirginia", "弗吉尼亚大学", "弗吉尼亚"],
      ["Georgia Tech", "git", "GIT", "georgia tech", "Georgia tech", "Gatech", "gatech", "Georgia Institute of Technology", "佐治亚理工", "佐治亚理工学院", "佐治亚理工大学", "乔治亚理工", "乔治亚理工学院", "乔治亚理工大学", "南方MIT"],
      ["NYU", "nyu", "New York University", "new york university", "New York university", "纽大", "纽约大学"],
      ["Tufts", "tufts", "Tufts University", "Tufts university", "tufts university", "塔夫茨", "塔夫茨大学"],
      ["UNC", "unc", "University of North Carolina", "university of north carolina", "Chapel Hill", "chapel hill", "University of North Carolina, Chapel Hill", "University of North Carolina Chapel Hill", "北卡教堂山", "北卡", "北卡罗来纳大学", "北卡罗来纳大学教堂山分校", "北卡罗来纳"],
      ["Rochester", "rochester", "Rochester University", "University of Rochester", "university of rochester", "Rochester university", "rochester university", "罗切斯特", "罗切斯特大学"]
    ],
    school: 0,
    score: 0,
    avgScore: 0,
    total: 0,
    less: 0,
    equal: 0,
    submitted1: false,
    
    actFirst: true,
    submitted2: false,
    sat: 0,
    act: 0,

    submitted3: false,
    duolingo: -1,
    tfl: -1
  },

  satToACT: function(x) {
    if(x==1600) return 36
    if(x>=1560) return 35
    if(x>=1520) return 34
    if(x>=1490) return 33
    if(x>=1450) return 32
    if(x>=1420) return 31
    if(x>=1390) return 30
    if(x>=1350) return 29
    if(x>=1310) return 28
    if(x>=1280) return 27
    if(x>=1240) return 26
    if(x>=1200) return 25
    if(x>=1160) return 24
    if(x>=1130) return 23
    if(x>=1100) return 22
    if(x>=1060) return 21
    if(x>=1020) return 20
    if(x>=980) return 19
    if(x>=940) return 18
    if(x>=900) return 17
    if(x>=860) return 16
    if(x>=810) return 15
    if(x>=760) return 14
    if(x>=720) return 13
    if(x>=630) return 12
    if(x>=560) return 11
    return 0
  },

  actToSAT: function(x) {
    if(x==36) return [1600, 1600]
    if(x==35) return [1560, 1590]
    if(x==34) return [1520, 1550]
    if(x==33) return [1490, 1510]
    if(x==32) return [1450, 1480]
    if(x==31) return [1420, 1440]
    if(x==30) return [1390, 1410]
    if(x==29) return [1350, 1380]
    if(x==28) return [1310, 1340]
    if(x==27) return [1280, 1300]
    if(x==26) return [1240, 1270]
    if(x==25) return [1200, 1230]
    if(x==24) return [1160, 1190]
    if(x==23) return [1130, 1150]
    if(x==22) return [1100, 1120]
    if(x==21) return [1060, 1090]
    if(x==20) return [1020, 1050]
    if(x==19) return [980, 1010]
    if(x==18) return [940, 970]
    if(x==17) return [900, 930]
    if(x==16) return [860, 890]
    if(x==15) return [810, 850]
    if(x==14) return [760, 800]
    if(x==13) return [720, 750]
    if(x==12) return [630, 710]
    if(x==11) return [560, 620]
    return [0, 0]
  },

  duolingoToTOEFL: function(x) {
    if(x<=25) return [0,0]
    if(x==30) return [1,1]
    if(x==35) return [2,4]
    if(x==40) return [5,8]
    if(x==45) return [9,13]
    if(x==50) return [14,19]
    if(x==55) return [20,25]
    if(x==60) return [26,31]
    if(x==65) return [32,37]
    if(x==70) return [38,43]
    if(x==75) return [44,49]
    if(x==80) return [50,55]
    if(x==85) return [56,61]
    if(x==90) return [62,67]
    if(x==95) return [68,73]
    if(x==100) return [74,79]
    if(x==105) return [80,85]
    if(x==110) return [86,91]
    if(x==115) return [92,96]
    if(x==120) return [97,102]
    if(x==125) return [103,107]
    if(x==130) return [108,112]
    if(x==135) return [113,115]
    if(x==140) return [116,118]
    if(x==145) return [119,119]
    if(x>=150) return [120,120]
  },

  calculate: function(e) {
    let flag = false
    for(var i=0;i<33;++i)
      if(this.data.schoolList[i].includes(e.detail.value.school)) {
        flag = true
        this.setData({
          school: this.data.schoolList[i][0]
        })
        break
      }
    if(!flag) {
      wx.showToast({
        title: '抱歉，未能找到该学校，请检查拼写！',
        duration: 1000,
        icon: "none"
      })
      this.setData({
        submitted1: false
      })
      return
    }
    var num = Number.parseInt(e.detail.value.score)
    if(num < 400 || num > 1600 || num % 10 != 0 || isNaN(num)) {
      wx.showToast({
        title: '输入的分数有误！',
        duration: 1000,
        icon: "none"
      })
      this.setData({
        submitted1: false
      })
      return
    }
    this.setData({
      score: num,
      submitted1: true
    })
    db.collection("applicationProfiles").where({
      school: this.data.school  
    }).get().then(res => {
      this.setData({
        total: res.data.length
      })
      var totScore = 0, lessNum = 0, eqNum = 0
      for(var i=0;i<res.data.length;++i) {
        totScore += res.data[i].score
        if(res.data[i].score < this.data.score) ++lessNum
        else if(res.data[i].score == this.data.score) ++eqNum
      }
      this.setData({
        less: lessNum,
        equal: eqNum,
        avgScore: totScore / res.data.length
      })
    })
  },

  switch: function() {
    var temp = this.data.actFirst
    this.setData({
      actFirst: !temp
    })
  },

  solveScore1: function(e) {
    var num = Number.parseInt(e.detail.value.score)
    if(this.data.actFirst) {
      if(num > 36 || num < 0 || isNaN(num)) {
        wx.showToast({
          title: '输入的分数有误！',
          duration: 1000,
          icon: "none"
        })
        this.setData({
          submitted2: false
        })
        return
      }
      this.setData({
        act: num,
        submitted2: true,
        sat: this.actToSAT(num)
      })
    }
    else {
      if(num > 1600 || num < 400 || num % 10 != 0 || isNaN(num)) {
        wx.showToast({
          title: '输入的分数有误！',
          duration: 1000,
          icon: "none"
        })
        this.setData({
          submitted2: false
        })
        return
      }
      this.setData({
        sat: num,
        submitted2: true,
        act: this.satToACT(num)
      })
    }
  },

  solveScore2: function(e) {
    var num = Number.parseInt(e.detail.value.score)
    if(num % 5 != 0 || num > 160 || num < 0 || isNaN(num)) {
      wx.showToast({
        title: '输入的分数有误！',
        duration: 1000,
        icon: "none"
      })
      this.setData({
        submitted3: false
      })
      return
    }
    this.setData({
      duolingo: num,
      submitted3: true,
      tfl: this.duolingoToTOEFL(num)
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      submitted1: false,
      submitted2: false,
      submitted3: false
    })
  },
  
  askForHelp: function() {
    wx.navigateTo({
      url: '../names/names',
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