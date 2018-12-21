// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      idx: 0,
      service_list: ["电缆求奥佳", "电缆求dfd奥佳", "电缆求奥佳", "电缆求奥佳", "电缆求奥佳", "电缆求奥佳", "电缆求奥佳", "电缆求奥佳", "电缆求奥佳"]
  },
    gotoPhotos: function() {
        wx.navigateTo({
            url: '/pages/CompanyDetails/CompanyDetails',
        })
    },
    gotoContact() {
        wx.openLocation({
            latitude: 39.0238848183,
            longitude: 116.9650357962,
            scale: 18,
            name: "天津新振机械有限公司",
            address: "tianjian"
        })
    },
    phone: function() {
        wx.makePhoneCall({
            phoneNumber: '022-68121722',
        })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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