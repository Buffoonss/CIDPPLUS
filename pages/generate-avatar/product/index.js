// pages/product/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		headList: [
			{
				imgSrc: "/img/headlist/pic1.png",
				text: "样式一"
			},
			{
				imgSrc: "/img/headlist/pic2.png",
				text: "样式二"
			},
			{
				imgSrc: "/img/headlist/pic3.png",
				text: "样式三"
			},
			{
				imgSrc: "/img/headlist/pic4.png",
				text: "样式四"
			},
			{
				imgSrc: "/img/headlist/pic5.png",
				text: "样式五"
			},
			{
				imgSrc: "/img/headlist/pic6.png",
				text: "样式六"
			},
			{
				imgSrc: "/img/headlist/pic7.png",
				text: "样式七"
			},
			{
				imgSrc: "/img/headlist/pic8.png",
				text: "样式八"
			},
		]

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	toMake: function (options) {
		console.log(options.currentTarget.dataset.src);
		let chooseImgSrc = options.currentTarget.dataset.src
		wx.navigateTo({
			url: '/pages/generate-avatar/upload/index?src=' + chooseImgSrc
		});
	},
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

	}
}
)