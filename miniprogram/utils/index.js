export function setTheme(theme){
  try {
    wx.setStorageSync('theme', theme)
  } catch (e) {
    console.log('设置主题失败!',e)
   }
}