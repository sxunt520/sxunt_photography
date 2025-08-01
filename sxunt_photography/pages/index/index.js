//const WXAPI = require('apifm-wxapi')
const MYWXAPI = require('my-wxapi')

Page({
  data: {
    carouselImages: [
      '/assets/pic2.jpg',
      '/assets/pic3.jpg',
      '/assets/pic4.jpg'
    ],
    announcement: '欢迎来到摄影画廊，发现摄影灵感！',
    recommendImages: [
      { id: 1, url: '/assets/pic1.jpg', title: '夕阳下的剪影' },
      { id: 2, url: '/assets/pic2.jpg', title: '城市夜景' },
      { id: 3, url: '/assets/pic3.jpg', title: '自然之美' },
      { id: 4, url: '/assets/pic4.jpg', title: '人文瞬间' }
    ]
  },
  goDetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`
    });
  },

  onLoad: function (options) {
    MYWXAPI.storys({
        page: 1,
        pagenum: 3,
      }).then(res => {
      if (res.status == 0) {
        this.setData({
          storys: res.data
        })
      }
    })
  },

  // onLoad: function (options) {
  //   WXAPI.banners().then(res => {
  //     if (res.code == 0) {
  //       this.setData({
  //         banners: res.data
  //       })
  //     }
  //   })
  // },
  // onShow(){
  //   wx.showToast({
  //     title: '左右滑动',
  //     icon: 'none'
  //   })
  // },

  // cmsArticles() { // 读取所有的文章列表
  //   WXAPI.cmsArticlesV3().then(res => {
  //     console.log(res)
  //     if (res.code == 0) {
  //       wx.showToast({
  //         title: '读取成功',
  //         icon: 'success'
  //       })
  //     } else {
  //       wx.showToast({
  //         title: res.msg,
  //         icon: 'none'
  //       })
  //     }
  //   })
  // },
  // cmsArticleDetail() { // 读取文章详情
  //   const newsId = 9385788 // 文章ID
  //   WXAPI.cmsArticleDetailV3(newsId).then(res => {
  //     console.log(res)
  //     if (res.code == 0) {
  //       wx.showToast({
  //         title: '读取成功',
  //         icon: 'success'
  //       })
  //     } else {
  //       wx.showToast({
  //         title: res.msg,
  //         icon: 'none'
  //       })
  //     }
  //   })
  // },


});