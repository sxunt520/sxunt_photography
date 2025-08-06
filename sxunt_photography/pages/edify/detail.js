const MYWXAPI = require('../../components/my-wxapi/index.js')

// 模拟数据源，根据id获取图片详情
const images = [
  { id: 1, url: '/assets/pic1.jpg', title: '夕阳下的剪影', inspiration: '逆光拍摄可以突出轮廓与氛围' },
  { id: 2, url: '/assets/pic2.jpg', title: '城市夜景', inspiration: '尝试长曝光捕捉城市流光' },
  { id: 3, url: '/assets/pic3.jpg', title: '自然之美', inspiration: '利用前景增强空间层次' },
  { id: 4, url: '/assets/pic4.jpg', title: '人文瞬间', inspiration: '抓住人物表情讲述故事' },
  { id: 5, url: '/assets/pic5.jpg', desc: '光影与构图', inspiration: '利用光线变化营造氛围' },
  { id: 6, url: '/assets/pic6.jpg', desc: '色彩碰撞', inspiration: '大胆用色，制造视觉冲击' }
];

Page({
  data: {
    image: {}
  },
  onLoad(options) {
    //const img = images.find(i => i.id == options.id) || {};
    //this.setData({ image: img });

    MYWXAPI.EdifyDetail({
      id: options.id,
    }).then(res => {
    if (res.status == 0) {
      this.setData({
        //EdifyList:res.data.map(item => item.picurl)
        EdifyDetail:res.data
      })
    }
    });

  }
});