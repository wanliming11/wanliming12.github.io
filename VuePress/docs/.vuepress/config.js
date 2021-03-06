module.exports = {
  title: '',
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
      { text: 'MurlocOne', link: '/murlocwan/' }, // 内部链接 以docs为根目录     
    ],
    sidebar:{
    	'/murlocwan/':[
      ],
      '/':[
        ''
      ]
    }
  }
}