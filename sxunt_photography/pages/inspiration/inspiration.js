// 所有图片数据（建议实际开发放在云端或接口返回）
const allImages = [
  { id: 1, url: '/assets/pic1.jpg', desc: '光影与构图' },
  { id: 2, url: '/assets/pic2.jpg', desc: '色彩碰撞' },
  { id: 3, url: '/assets/pic3.jpg', desc: '静谧时刻' },
  { id: 4, url: '/assets/pic4.jpg', desc: '动感瞬间' },
  { id: 5, url: '/assets/pic5.jpg', desc: '自然纹理' },
  { id: 6, url: '/assets/pic6.jpg', desc: '建筑几何' },
  { id: 7, url: '/assets/pic1.jpg', desc: '湖畔清晨' },
  { id: 8, url: '/assets/pic2.jpg', desc: '城市光轨' },
  { id: 9, url: '/assets/pic3.jpg', desc: '夏日绿意' },
  { id: 10, url: '/assets/pic4.jpg', desc: '冬日雪色' },
  { id: 11, url: '/assets/pic1.jpg', desc: '光影与构图' },
  { id: 12, url: '/assets/pic2.jpg', desc: '色彩碰撞' },
  { id: 13, url: '/assets/pic3.jpg', desc: '静谧时刻' },
  { id: 14, url: '/assets/pic4.jpg', desc: '动感瞬间' },
  { id: 15, url: '/assets/pic5.jpg', desc: '自然纹理' },
  { id: 16, url: '/assets/pic6.jpg', desc: '建筑几何' },
  { id: 17, url: '/assets/pic1.jpg', desc: '湖畔清晨' },
  { id: 18, url: '/assets/pic2.jpg', desc: '城市光轨' },
  { id: 19, url: '/assets/pic3.jpg', desc: '夏日绿意' },
  { id: 20, url: '/assets/pic4.jpg', desc: '冬日雪色' },
  // ...更多图片
];

// 简易瀑布流分列算法
function splitColumns(data, cols = 2) {
  const columns = Array(cols).fill().map(() => []);
  data.forEach((item, idx) => {
    columns[idx % cols].push(item);
  });
  return columns;
}

const PAGE_SIZE = 8;

Page({
  data: {
    waterfallColumns: [],
    loadedCount: 0,
    loading: false,
    hasMore: true
  },
  onLoad() {
    this.loadMore();
  },
  loadMore() {
    if (this.data.loading || !this.data.hasMore) return;
    this.setData({ loading: true });

    const start = this.data.loadedCount;
    const end = start + PAGE_SIZE;
    const nextImages = allImages.slice(start, end);
    const newLoadedCount = end > allImages.length ? allImages.length : end;

    let mergedImages = (this.data.waterfallColumns.flat()).concat(nextImages);
    let newColumns = splitColumns(mergedImages, 2);

    this.setData({
      waterfallColumns: newColumns,
      loadedCount: newLoadedCount,
      hasMore: newLoadedCount < allImages.length,
      loading: false
    });
  },
  onReachBottom() {
    this.loadMore();
  },
  goDetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`
    });
  }
});