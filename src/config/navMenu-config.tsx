const menuList = [
	{
		title: '首页',
		key: '/home'
	},
	{
		title: 'UI',
		key: '/ui',
		children: [
			{
				title: '按钮Button',
				key: '/ui/button',
			},
			{
				title: '对话框Modal',
				key: '/ui/modal',
			},
			{
				title: '加载中Loading',
				key: '/ui/loading',
			},
			{
				title: '通知提醒Notification',
				key: '/ui/notification',
			},
			{
				title: '全局提示Message',
				key: '/ui/message',
			},
			{
				title: '标签页Tab',
				key: '/ui/tab',
			},
			{
				title: '卡片Card',
				key: '/ui/card',
			},
			{
				title: '走马灯Carousel',
				key: '/ui/carousel',
			},
			{
				title: '折叠面板Collapse',
				key: '/ui/collapse'
			}
		]
	},
	{
		title: '表单',
		key: '/form',
		children: [
			{
				title: '登录Login',
				key: '/form/login',
			}
		]
	},
	{
		title: '表格',
		key: '/table',
		children: [
			{
				title: '基础表格',
				key: '/table/basic',
			},
			{
				title: '高级表格',
				key: '/table/senior',
			}
		]
	},
	{
		title: 'Echarts',
		key: '/chart',
		children: [
			{
				title: '柱形图Bar',
				key: '/chart/bar'
			},
			{
				title: '饼图Pie',
				key: '/chart/pie'
			},
			{
				title: '折线图Line',
				key: '/chart/line'
			},
		]
	},
	{
		title: '富文本',
		key: '/richeditor'
	},
	{
		title: '城市管理',
		key: '/city'
	},
	{
		title: '订单管理',
		key: '/order',
		// children: [
		// 	{
		// 		title: '订单详情',
		// 		key: 'detail'
		// 	},
		// 	{
		// 		title: '结束订单',
		// 		key: 'finish'
		// 	}
		// ]
	},
	{
		title: '职工管理',
		key: '/user'
	},
	{
		title: '分布地图',
		key: '/bikeMap'
	},

	{
		title: '权限设置',
		key: '/permission'
	},
];




export default menuList;