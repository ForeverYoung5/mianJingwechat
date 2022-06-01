const ROUTES = [{
		//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/home/index',
		aliasPath: '/', //对于h5端你必须在首页加上aliasPath并设置为/
		name: 'home',
		meta: {
			title: '首页',
		},
	},
	{
		path: '/pages/video/index',
		// aliasPath: '/',
		name: 'videos',
		meta: {
			title: '视频资源',
		},
	},
	{
		path: '/pages/mine/index',
		// aliasPath: '/',
		name: 'mine',
		meta: {
			title: '我的',
		},
	},

]

export default ROUTES
