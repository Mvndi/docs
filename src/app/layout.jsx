/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s - Mvndicraft'
  },
  description: 'Mvndicraft',
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <><img src="/favicon.png" alt="favicon" width="32"/><span>Mvndicraft</span></>
      }
      chatLink="https://discord.gg/2BP6h8Sstav"
    />
  )
  const pageMap = await getPageMap()
  console.log(pageMap)
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="mvndi">Beta open at mc.mvndicraft.net 1.21.4 java</Banner>}
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/Mvndi/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
