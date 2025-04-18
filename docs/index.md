---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '프로젝트 가이드'
  # text: "vitepress-guide"
  # tagline: hy 프로젝트 가이드
  actions:
    - theme: brand
      text: Markdown Examples
      link: /examples/markdown-examples
    - theme: alt
      text: API Examples
      link: /examples//api-examples
# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/styeo94.png',
    name: 'styeo94',
    title: 'PM',
    links: [
      { icon: 'github', link: 'https://github.com/styeo94' }
    ]
  },
  {
    avatar: 'https://www.github.com/reifier92.png',
    name: 'reifier92',
    title: 'Frontend',
    links: [
      { icon: 'github', link: 'https://github.com/reifier92' }
    ]
  },
  {
    avatar: 'https://www.github.com/oseongryu.png',
    name: 'oseongryu',
    title: 'Backend',
    links: [
      { icon: 'github', link: 'https://github.com/oseongryu' }
    ]
  },
  {
    avatar: '',
    name: '',
    title: '',
    links: []
  },
  
]
</script>

<VPTeamPage>
  <VPTeamMembers size="small" :members />
</VPTeamPage>
