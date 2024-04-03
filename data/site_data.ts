import { BookText } from 'lucide-vue-next'
import type { url_link } from '@/types/data'

export const site = {
  title: 'Skill Sheet',
  description: 'Engineer Skill Sheet'
}

export const date = {
  lastUpdatedAt: new Date()
}

export const urlLinks: url_link[] = [
  {
    icon: 'uil:github',
    href: process.env.LINK_URL_1 || '#',
    tooltip: 'Github'
  },
  { icon: BookText, href: process.env.LINK_URL_2 || '#', tooltip: 'Qiita' }
]
