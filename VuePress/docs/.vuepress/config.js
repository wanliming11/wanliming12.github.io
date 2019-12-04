module.exports = {
  title: '跨平台文档中心',
  description: ' ',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    sidebar: 'auto',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      { text: '通用桥接接口', link: '/bridges/' }, // 内部链接 以docs为根目录
      // { 
      //   text:'RN',
      //   items:[
      //     {
      //       text:'文档概览',
      //       link:'/rn/summary/'
      //     },
      //     {
      //       text:'接口文档',
      //       link:'/rn/api/'
      //     }
      //   ]
      // },
      // { 
      //   text:'H5',
      //   items:[
      //     {
      //       text:'文档概览',
      //       link:'/rn/summary/'
      //     },
      //     {
      //       text:'接口文档',
      //       link:'/rn/api/'
      //     }
      //   ]
      // },
      // 下拉列表
      {
        text: '进阶功能(敬请期待)',
        items: [
          { text: '更新文档', link: 'http://10.113.21.36:10086/' },
          {
            text: '内部文档',
            // link: 'http://doc.dz11.com/dds/space/folder?sid=429&resId=82299'
            link: '/advanced/'
          }
        ]
      }        
    ],
    sidebar:{
    	'/bridges/':[
    		'接口规范',
    		['/bridges/用户User','用户User'],
    		'直播间Room',
    		'路由Router',
    		'分享Share',
    		'文件File',
    		'系统System',
    		'应用App',
    		'数据持久化Storage',
        '网络请求Request',
        '大数据Tracker',
        '推送Push',
        'Toast',
        'WebView',
        'event实现原理'
      ],
      '/common/':[
        'started',
        'basics',
        'dybasics',
        'develop',
        'api',
        'debug',
        'CI',
        'rules',
        'monitor',
        'FAQ'
      ],
      '/advanced/':[
        'started',
        'basics',
        'api',
        'develop',
        'debug',
        'CI',
        'monitor'
    	],
      '/projects/oa/':[
        '文件File',
        '系统System',
        '应用App',
        '数据持久化Storage',
        '网络请求Request',
        'Toast',
        'ThirdSdk'
      ],
    	'/rn/summary/':[
    		''
    	],
      '/rn/api/':[
        'event'
      ],
      '/':[
        ''
      ]
    }
  }
}