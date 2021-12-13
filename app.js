// app.js
App({
  onLaunch() {

    wx.cloud.init({
      env: "res-1g2f479o005335ae"
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    backURL: "http://127.0.0.1:8006"
  }
})