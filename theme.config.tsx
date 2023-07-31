import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const styles = {
  container: {
    paddingLeft: '10%'
  },
} as const;

const config = {
  head: (
    <React.Fragment>
      <meta name="description" content="Medieval geopolitics in Minecraft" />
      <meta property="og:title" content="Medieval geopolitics in Minecraft" />
      <meta property="og:description" content="Medieval geopolitics in Minecraft" />
      <meta name="apple-mobile-web-app-title" content="Mvndicraft" />
      <link rel="icon" type="image/png" href="/favicon.png"/>
    </React.Fragment>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Mvndicraft'
    }
  },
  logo: <><img src="/favicon.png" alt="favicon" width="32"/> <span style={styles.container}>Mvndicraft</span></>,
  chat: {
    link: 'https://discord.gg/2BP6h8Ssta',
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: "MVNDICRAFT @ 2023     SUPPORT: admin@mvndicraft.net",
  },
}

export default config
