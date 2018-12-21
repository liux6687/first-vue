// pages/cust/cust.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      custList: [
          {
              icon: "../../images/a1.png",
              text: "天津新振机械",
              text_right: ""
          },
          {
              icon: "../../images/a2.png",
              text: "022-68121722",
              text_right: "[一键联系]"
          }
          ,
          {
              icon: "../../images/a3.png",
              text: "15222684638",
              text_right: "[一键联系]"
          },
          {
              icon: "../../images/a4.png",
              text: "weixinhao",
              text_right: ""
          },
          {
              icon: "../../images/a5.png",
              text: "qq号",
              text_right: ""
          },
          {
              icon: "../../images/a6.png",
              text: "天津市静海区良王庄乡良一村",
              text_right: "[一键导航]"
          }
      ]
  },
    click: function(e) {
        var id = e.currentTarget.dataset.id;
        if(id == 1) {
            wx.makePhoneCall({
                phoneNumber: '022-68121722',
            })
        }else if(id == 2) {
            wx.makePhoneCall({
                phoneNumber: '15222684638',
            })
        }else if (id == 5) {
            wx.openLocation({
                latitude: 39.0238848183,
                longitude: 116.9650357962,
                scale: 18,
                name: "天津新振机械有限公司",
                address: "tianjian"
            })
        }
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