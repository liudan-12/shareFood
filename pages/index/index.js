// pages/mainPage/index/index.js
const db_share = wx.cloud.database().collection('foodshare')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList: [],
    background: [{
        id: 1,
        name: "1",
        imgUrl: "http://127.0.0.1:8006/assets/homes/carousel/1.jpg"
      },
      {
        id: 2,
        name: "2",
        imgUrl: "http://127.0.0.1:8006/assets/homes/carousel/2.jpg"
      },
      {
        id: 3,
        name: "3",
        imgUrl: "http://127.0.0.1:8006/assets/homes/carousel/3.jpg"
      },
      {
        id: 4,
        name: "4",
        imgUrl: "http://127.0.0.1:8006/assets/homes/carousel/4.jpg"
      },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFooedShare()
  },
  onPullDownRefresh() {
    this.onLoad()
  },

  /* 应在发布页面添加时间，进行orderBy排序 */
  getFooedShare() {
    wx.showLoading({
      title: '加载中...',
      cion: 'loading'
    })
    db_share.get()
      .then(res => {
        this.data.foodList = res.data
        this.setData({
          foodList: res.data
        })
        wx.hideLoading()
      })
  },
  /*详情页 */
  goTopics(event) {
    console.log(event)
    let bindex = event.currentTarget.dataset.bindex
    console.log(bindex)
    let pages = this.data.foodList[bindex]
    // 对象转为字符串
    let str = JSON.stringify(pages);
    console.log(str)
    wx.navigateTo({
      url: '/pages/topics/topics?str=' + str,
    })

  }

})