// pages/mainPage/index/index.js
const db_share = wx.cloud.database().collection('myshare')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ListTemp: [],
    background: [{
        id: 1,
        name: "1",
        imgUrl: "../../img/carousel/1.jpg"
      },
      {
        id: 2,
        name: "2",
        imgUrl: "../../img/carousel/2.jpg"
      },
      {
        id: 3,
        name: "3",
        imgUrl: "../../img/carousel/3.jpg"
      },
      {
        id: 4,
        name: "4",
        imgUrl: "../../img/carousel/4.jpg"
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
    // 先清空数组，再重新赋值
    this.getShare()

  },
  // 下拉刷新
  onPullDownRefresh() {
    this.data.ListTemp = []
    this.onLoad()
  },
  // 上拉请求数据
  onReachBottom() {


  },

  /* 云函数 获取数据*/
  getShare() {
    wx.showLoading({
      title: '加载中...',
      mask: true,
    })
    // db_share.get()
    // 当前文章数组长度
    let len = this.data.ListTemp.length
    console.log(len)
    wx.cloud.callFunction({
      name: 'getList',
      data: {
        len: len
      }
    }).then(res => {
      console.log(res)

      this.setData({
        // concat 拼接数组
        ListTemp: this.data.ListTemp.concat(res.result.list)
      })
      console.log(this.data.ListTemp)
      wx.hideLoading()
    }).catch(console.error, wx.hideLoading())
  },
  /*跳转详情页 */
  goTopics(event) {
    console.log(event)
    // 数组下标
    let bindex = event.currentTarget.dataset.bindex
    console.log(bindex)
    //当前数组下标的数据
    let pages = this.data.ListTemp[bindex]
    // 对象转为字符串
    let str = JSON.stringify(pages);
    console.log(str)
    // 跳转
    wx.navigateTo({
      url: '/pages/indexitems/topics/topics?str=' + str,
    })
  }

})