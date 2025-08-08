const MYWXAPI = require('../../components/my-wxapi/index.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList3: undefined, // 推荐的文章
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad (options) {
    
    // 设置小程序名称
    wx.setNavigationBarTitle({
      title:'SXUNT-HOME',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  async onShow () {
    // 读取后台推荐的文章列表
    MYWXAPI.advBanner({
      page: 1,
      pagenum: 4,
      type_id: 2,
    }).then(res => {
    if (res.status == 0) {

      // const transformedData = res.data.map(item => {
      //   return { [item.jumpurl]: item.advimg };
      // })
      //  console.log(transformedData);
      
      this.setData({
        swiperList2:res.data.map(item => item.advimg)
      })
      this.setData({
        swiperList3:res.data
      })

    }
    });

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