// pages/user/user.js
const db = wx.cloud.database()
const db_users = db.collection("users")
Page({
  data: {
    userinfo: {},
    login: false,
  },
  onLoad() {
    //获取用户openID
    wx.cloud.callFunction({
      name: "getopenid"
    }).then(res => {
      console.log(res.result.openid)
      wx.setStorageSync('openid', {
        openid: res.result.openid
      })
      // 本地渲染
      const userinfo = wx.getStorageSync('userinfo')
      this.setData({
        login: true,
        userinfo: userinfo
      })

    })




  },

  async onLogin() {
    // 获取用户新
    await wx.getUserProfile({
      desc: '请登录',
    }).then(res => {
      console.log(res)
      this.data.userinfo = res.userInfo
      this.setData({
        login: true,
        userinfo: this.data.userinfo
      })
      wx.setStorageSync('userinfo', this.data.userinfo)
    }).catch(console.error)
    console.log(this.data.userinfo)
/* 
    // 添加添加用户到数据库
    //应先判断数据库是否包含此用户openid
*/
    db_users.add({
      data: {
        nickName: this.data.userinfo.nickName,
        avatarUrl: this.data.userinfo.avatarUrl
      }
    }).then(() => {
      console.log('成功')
    }).catch(console.error)
  },

})