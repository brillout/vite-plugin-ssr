import { Warning, Link } from '@brillout/docpress'
import type { Config } from '@brillout/docpress'
import { headings } from './headings'
import { headingsDetached } from './headingsDetached'
import { projectInfo } from './utils'
import faviconUrl from './images/icons/vite-plugin-ssr.svg'
import React from 'react'
import { NavHeader, NavHeaderMobile } from './NavHeader'

export default {
  projectInfo,
  faviconUrl,
  navHeader: <NavHeader />,
  navHeaderMobile: <NavHeaderMobile />,
  headings,
  headingsDetached,
  tagline: 'Like Next.js/Nuxt but as do-one-thing-do-it-well Vite plugin.',
  titleNormalCase: false,
  twitterHandle: '@brillout',
  websiteUrl: 'https://vite-plugin-ssr.com',
  algolia: {
    appId: 'MUXG1ZE9F6',
    apiKey: '8d5986fca9ba9110bcbbfc51263de88b',
    indexName: 'vite-pluginssr'
  },
  bannerUrl: 'https://vite-plugin-ssr.com/banner.png',
  i18n: true,
  globalNote: <GlobalNoteRename />
} satisfies Config

function GlobalNoteRename() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: 585, margin: 'auto' }}>
        <Warning>
          The <code>vite-plugin-ssr</code> project has been renamed <a href="https://vike.dev">Vike</a>.
          <ul>
            <li>
              If you are using <code>vite-plugin-ssr</code>, <Link href="/vike">migrate to Vike</Link>.
            </li>
            <li>For new projects, use Vike instead of <code>vite-plugin-ssr</code>.</li>
          </ul>
          Vike itself (<a href="https://vike.dev/extension-vs-custom">without extensions</a>) is like <code>vite-plugin-ssr</code>: unopinionated and fully agnostic.
        </Warning>
      </div>
    </>
  )
}
