// pages/foodshare/foodshare.js
const db_share = wx.cloud.database().collection('foodshare')
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    shareTit: '',
    shaerPage: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  afterRead(event) {
    const {
      file
    } = event.detail;
    this.data.fileList.push({
      ...file,
      url: file.url
    });
    console.log(this.data.fileList)
    this.setData({
      fileList: this.data.fileList
    });
  },
  // 清空图片
  deleteImg(event) {
    this.setData({
      fileList: []
    })
  },

  /* 应添加确定按钮 */
  shareDialog() {
    if (!Boolean(this.data.shaerPage) || !Boolean(this.data.shareTit) || !this.data.fileList.length) {
      wx.showToast({
        title: '不能为空',
        icon: 'error',
      })
      return
    }
    Dialog.confirm({
        title: 'Share',
        message: '你要和大家分享你的美食吗？',
      })
      .then(() => {
        // on confirm
        this.shareFood()
      })
      .catch(() => {
        // on cancel
        wx.showToast({
          title: '取消分享',
          icon: 'none'
        })
      });

  },



  // shareFood
  shareFood() {
    let shareTit = this.data.shareTit;
    let shaerPage = this.data.shaerPage;
    let cloudPath = "Photo/" + Date.now() + ".jpg"; //云储存
    wx.cloud.uploadFile({
      cloudPath, //仅为示例，非真实的接口地址
      filePath: this.data.fileList[0].url,
    }).then((res) => {
      console.log(res.fileID)
      db_share.add({
        data: {
          shareTit: shareTit,
          shaerPage: shaerPage,
          fileImg: res.fileID
        }
      }).then(res => {
        console.log(res)
        wx.showToast({
          title: '分享成功',
          icon: 'success'
        })
      }).catch(console.catch)
    }).catch(console.catch)
  }





})