// miniprogram/pages/focus/index.js
import { getMinutes } from '../../utils/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:5,
    timeStr:'30min00s'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setScreenBrightness({
      value: 0,
      success: () => { console.log('setScreenBrightness success') },
      fail: () => { console.log('setScreenBrightness fail') }
    })
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
    // const time = getApp().globalData.time;
    // this.setData({
    //   num : time * 60,
    //   timeStr : getMinutes(time * 60)
    // })
    const timer=setInterval(()=>{
      const num = this.data.num - 1
      const timeStr = getMinutes(num)
      console.log(timeStr)
      if (timeStr){
        
        this.setData({
          num,
          timeStr
        })
      }else{
        clearInterval(timer);
        wx.navigateTo({
          url: '/pages/index/index',
          events: {
            // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
            acceptDataFromOpenedPage: function (data) {
              console.log(data)
            },
            someEvent: function (data) {
              console.log(data)
            }
          },
          success: function (res) {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', {
              success:true
            })
          }
        })
      }
    },1000)
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