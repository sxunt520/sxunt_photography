Page({
  data: {
    userInfo: null
  },
  onLoad() {
    const info = wx.getStorageSync('userInfo');
    if (info) this.setData({ userInfo: info });
  },
  onGetUserInfo(e) {
    if (e.detail.userInfo) {
      wx.setStorageSync('userInfo', e.detail.userInfo);
      this.setData({ userInfo: e.detail.userInfo });
    }
  }
});