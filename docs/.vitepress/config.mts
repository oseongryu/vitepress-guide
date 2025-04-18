import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "프로젝트 가이드",
  description: "프로젝트 가이트 설명",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/examples/markdown-examples' },
    ],
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    sidebar: [
      { text: '📋 환경설정 (Mac M1)', collapsed: false, items: [{ text: '- 어플리케이션', link: '/page_environment/01-environment-mac-m1-hy' }, { text: '- 프로젝트 환경설정', link: '/page_environment/02-environment-mac-m1-hy' }]},
      { text: '📋 Examples', collapsed: false, items: [{ text: 'Markdown Examples', link: '/examples/markdown-examples' },{ text: 'Runtime API Examples', link: '/examples/api-examples' }]},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

