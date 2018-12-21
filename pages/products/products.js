// pages/products/products.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollViewheight: 0,
    selected: 0,
    products: [
        {
          title: "挖掘机系列产品",
          list: [
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "推土铲式挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2015.5.1_22.45.52_6298.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg",
                "http://www.xinzhenjixie.com/Upload/PicFiles/2015.5.1_22.45.52_6298.jpg"
              ],
              text: "市政清理下水道挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2014.4.24_0.9.39_5024.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg",
                "http://www.xinzhenjixie.com/Upload/PicFiles/2015.5.1_22.45.52_6298.jpg",
                "http://www.xinzhenjixie.com/Upload/PicFiles/2014.11.16_23.25.17_6069.jpg"
              ],
              text: "军工部队专用挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2016.3.18_23.58.9_1912.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg",
                "http://www.xinzhenjixie.com/Upload/PicFiles/2015.5.1_22.45.52_6298.jpg",
                "http://www.xinzhenjixie.com/Upload/PicFiles/2014.4.24_0.9.39_5024.jpg"
              ],
              text: "2017新款小型轮式挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2014.1.27_16.22.9_8420.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "东风轮式抓草（木）挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2014.11.16_23.25.17_6069.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "多功能破碎扒料机"
            }
          ]
        },
        {
          title: "特种系列产品",
          list: [
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2014.12.9_21.38.2_5418.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "叉车推雪铲"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2014.12.1_0.8.29_4802.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "三节臂油电混合抓草（木）挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2015.3.28_22.17.0_4093.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "火车卸煤机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2016.10.12_23.46.14_5282.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "轮式破碎锤挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2015.10.30_22.57.51_8226.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "加长臂轮式捞咸菜机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2013.3.23_12.54.8_6305.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "装载机"
            }
          ]
        },
        {
          title: "特种系列产品",
          list: [
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2014.12.9_21.38.2_5418.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "叉车推雪铲"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2014.12.1_0.8.29_4802.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "三节臂油电混合抓草（木）挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2015.3.28_22.17.0_4093.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "火车卸煤机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2016.10.12_23.46.14_5282.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "轮式破碎锤挖掘机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2015.10.30_22.57.51_8226.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "加长臂轮式捞咸菜机"
            },
            {
              imgUrl: "http://www.xinzhenjixie.com/Upload/PicFiles/2013.3.23_12.54.8_6305.jpg",
              bannerList: [
                "http://www.xinzhenjixie.com/Upload/PicFiles/2013.9.15_18.4.10_3275.jpg"
              ],
              text: "装载机"
            }
          ]
        }
      ],
  },
  gotoProductsInfo: function(e) {
    var detailObj = {
        type: e.currentTarget.dataset.type,
        index: e.currentTarget.dataset.index
    }
    wx.navigateTo({
      url: "/pages/ProductsInfo/ProductsInfo?detailObj=" + JSON.stringify(detailObj),
      fail: function() {

      } 
    })
  },
  navClick: function(e) {
      var index = e.currentTarget.dataset.index;
      this.setData({
          selected: index
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var height = wx.getSystemInfoSync().windowHeight - 56;
      this.setData({
          scrollViewheight: height
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