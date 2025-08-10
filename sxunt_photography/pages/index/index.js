//const WXAPI = require('apifm-wxapi')
//const MYWXAPI = require('my-wxapi')

const MYWXAPI = require('../../components/my-wxapi/index.js')
//import {MYWXAPI} from '../../api/my-wxapi';


const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];


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
    ],
    current: 0,
    autoplay: false,
    duration: 500,
    interval: 5000,
    swiperList,
    VVVVList: [
      {
        id: 1,
        advimg: 'https://axe-video-1257242485.cos.ap-guangzhou.myqcloud.com/img_static/20250803/688f7322cd8fc.jpg',
        title: '轮播图1'
      },
      {
        id: 2,
        advimg: 'https://axe-video-1257242485.cos.ap-guangzhou.myqcloud.com/img_static/20250803/688f7322cd8fc.jpg',
        title: '轮播图2'
      },
      {
        id: 3,
        advimg: 'https://axe-video-1257242485.cos.ap-guangzhou.myqcloud.com/img_static/20250803/688f7322cd8fc.jpg',
        title: '轮播图3'
      }
    ],
    XswiperListX: [
      { id: 1, image: 'https://axe-video-1257242485.cos.ap-guangzhou.myqcloud.com/img_static/20250803/688f7322cd8fc.jpg', url: '/pages/detail/detail?id=11' },
      { id: 2, image: 'https://axe-video-1257242485.cos.ap-guangzhou.myqcloud.com/img_static/20250803/688f7322cd8fc.jpg', url: '/pages/detail/detail?id=12' },
      { id: 3, image: 'https://axe-video-1257242485.cos.ap-guangzhou.myqcloud.com/img_static/20250803/688f7322cd8fc.jpg', url: '/pages/detail/detail?id=13' }
    ]

  },
  
  methods: {
    onChange(e) {
      const {
        detail: { current, source },
      } = e;
      console.log(current, source);
    },
  },

  goDetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`
    });
  },

  //跳转渲染详情
  goEdifyDetail(e) {
    wx.navigateTo({
      url: `/pages/edify/detail?id=${e.currentTarget.dataset.id}`
    });
  },

  //跳转url
  jumpurl(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.jumpurl
    });
  },

  onLoad: function (options) {

    // MYWXAPI.storys({
    //     page: 1,
    //     pagenum: 3,
    //   }).then(res => {
    //   if (res.status == 0) {
    //     this.setData({
    //       storys: res.data
    //     })
    //   }
    // });

    MYWXAPI.advBanner({
      page: 1,
      pagenum: 3,
      type_id: 1,
    }).then(res => {
    if (res.status == 0) {
      this.setData({
        advBanner: res.data
      })
    }
    });

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
          swiperList2:res.data.map(item => item.advimg),
          swiperList2ToDetail:res.data.map(item => item.jumpurl)
        })
        // this.setData({
        //   swiperList2ToDetail:res.data.map(item => item.jumpurl)
        // })

        this.setData({
          swiperList3:res.data
        })

      }
    });

    MYWXAPI.EdifyList({
      page: 1,
      pagenum: 4,
      source: 1,//可选
    }).then(res => {
    if (res.status == 0) {
      this.setData({
        //EdifyList:res.data.map(item => item.picurl)
        EdifyList:res.data
      })
    }
    });

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

  navToActivityDetail({ detail }) {
    console.log(detail);
    // const { index: promotionID = 0 } = detail || {};
    // wx.navigateTo({
    //   url: `/pages/promotion/promotion-detail/index?promotion_id=${promotionID}`,
    // });

    const { index } = detail
    wx.navigateTo({
      url: this.data.swiperList2ToDetail[index]
    })

  },

  handleSwiperClick(e) {
    const { index } = e.detail
    const currentItem = this.data.XswiperListX[index]
    
    wx.navigateTo({
      url: currentItem.url
    })
  }

});