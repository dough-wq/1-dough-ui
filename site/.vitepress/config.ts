// 用来配置vitepress
import { defineConfig } from "vitepress";
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
// 通过defineConfig去定义一些vitepress的基本配置
export default defineConfig({
  title: "Dough-ui",
  ignoreDeadLinks: true,
  lang: "zh-CN",
  appearance: true,
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "../images/logo_icon.png" }]],
  themeConfig: {
    logo: "../images/logo_icon.png",
    siteTitle: false,
    nav: [
      { text: "指南", link: "/guide/install", activeMatch: "/guide/" },
      {
        text: "组件",
        link: "/components/button.md",
        activeMatch: "/component/",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/gggggihggg/dough-ui" },
    ],
    // 侧边栏
    sidebar: {
      // 指南
      "/guide/": [
        {
          text: "基础",
          items: [
            { text: "安装", link: "/guide/install" },
            { text: "快速开始", link: "/guide/getting-started" },
          ],
        },
      ],
      // 组件
      "/components/": [
        {
          text: "基本",
          items: [
            { text: "Button 按钮", link: "/components/button.md" },
            { text: "Grid 栅格", link: "/components/grid.md" },
            { text: "Icon 图标", link: "/components/icon.md" },
          ],
        },
        {
          text: "导航",
          items: [
            { text: "Breadcrumb 面包屑", link: "/components/breadcrumb.md" },
            { text: "Dropdown 下拉菜单", link: "/components/dropdown.md" },
            { text: "Pagination 分页", link: "/components/pagination.md" },
          ],
        },
        {
          text: "表单",
          items: [
            { text: "Checkbox 复选框", link: "/components/checkbox.md" },
            { text: "Input 输入框", link: "/components/input.md" },
            { text: "Switch 开关", link: "/components/switch.md" },
            { text: "Slider 滑块", link: "/components/slider.md" },
            { text: "Collapse 折叠面板 ", link: "/components/collapse.md" },
            { text: "DatePicker 日期选择器", link: "/components/datepicker.md" },
            { text: "Upload 上传", link: "/components/upload.md" },
          ],
        },
        {
          text: "视图",
          items: [
            { text: "Swiper 轮播", link: "/components/swiper.md" },
            { text: "Progress 进度条", link: "/components/progress.md" },
            { text: "Table 表格", link: "/components/table.md" },
          ],
        },
        {
          text: "提示",
          items: [
            { text: "Alert 警告", link: "/components/alert.md" },
            { text: "Message 消息提示", link: "/components/message.md" },
            { text: "Dialog 对话框", link: "/components/dialog.md" },
          ],
        },
        {
          text: "其他",
          items: [{ text: "Backtop 回到顶部", link: "/components/backtop.md" }],
        },
      ],
    },
    // 首页底部
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © dough",
    },
    // 首页搜索
    algolia: {
      appId: "883U6KEOAU",
      apiKey: "49156c3943b71f4167959c3202872067",
      indexName: "huccctio",
      locales: {
        zh: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
});
