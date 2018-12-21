//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    imagesList: [
        "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2015.5.1_22.45.52_6298.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2014.4.24_0.9.39_5024.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2016.3.18_23.58.9_1912.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2014.1.27_16.22.9_8420.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2014.11.16_23.25.17_6069.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2014.12.9_21.38.2_5418.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2014.12.1_0.8.29_4802.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2015.3.28_22.17.0_4093.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2016.10.12_23.46.14_5282.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2015.10.30_22.57.51_8226.jpg",
        "http://www.xinzhenjixie.com/Upload/PicFiles/2013.3.23_12.54.8_6305.jpg",
      ]
  }
})