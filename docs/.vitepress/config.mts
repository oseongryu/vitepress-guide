import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "프로젝트 가이드",
  description: "프로젝트 가이트 설명",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '📋 환경설정 (Mac M1)',
        items: [
          { text: '- A. 어플리케이션', link: '/environment/01-environment-mac-m1-hy' },
          { text: '- B. 프로젝트 환경설정', link: '/environment/02-environment-mac-m1-hy' }
        ]
      },
      {
        text: '📋 Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
