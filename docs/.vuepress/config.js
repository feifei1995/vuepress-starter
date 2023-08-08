module.exports = {
  title: 'Hello zyf',
  description: 'Just playing around',
  themeConfig: {
    // navbar: false,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'test',
        ariaLabel: 'test Menu',
        items: [
          { text: 'bar', link: '/bar/' },
          { text: 'foo', link: '/foo/' }
        ]
      },
      { text: 'External', link: 'https://baidu.com' },
    ],
    sidebar: [
      '/',
      '/bar/',
      ['/foo/', 'Explicit link text']
    ]
  },
  base: '/',
  port: 8009
}
