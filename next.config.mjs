import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/guides'
})

export default withNextra({
  reactStrictMode: true,
  output: 'export'
})
