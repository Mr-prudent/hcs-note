module.exports = {
  title: '前端学习笔记',
  description: '学习记录',
  markdown: {
    lineNumbers: true, // 代码块显示行号
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    nav: [
      {
        text: '读书笔记',
        items: [
          { text: '精通CSS', link: '/read/css-mastery/' },
          { text: 'Javascript程序编程', link: '/read/professional-javascript/' },
        ],
      },
      { text: '学习笔记', link: '/learn' },
      { text: '我的博客', link: 'https://www.cnblogs.com/ccti7/' },
    ],
    sidebar: {
      '/read/css-mastery/': ['8.响应式', '9.表单与数据表', '10.变换、过渡与动画', '11.高级特效', '12.品控与流程'],
    },
  },
};
