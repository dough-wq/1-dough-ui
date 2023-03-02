// 用来配置vitepress
import { defineConfig } from 'vitepress';
// 通过defineConfig去定义一些vitepress的基本配置
export default defineConfig({
  title: 'Dough-ui',
  ignoreDeadLinks: true,
  lang: 'zh-CN',
  appearance: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '../images/logo_icon.png' }]],
  themeConfig: {
    logo: '/logo-horizontal.png',
    siteTitle: false,
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/components/button/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huccct/tass-ui' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quickstart' },
          ],
        },
      ],
    },
  },
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
  },
});
