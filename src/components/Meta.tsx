import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  title?: string
  description?: string
  image?: string // TODO
  url: string
  keywords?: string
  shouldDisableBot?: boolean
  children?: ReactNode
}

const Meta = ({
  title = 'React tables',
  description = 'Examples of tables using reactjs',
  keywords = 'react tables, reactjs, tables, table js',
  image = '', // /assets/images/default-image.jpg
  shouldDisableBot = false,
  url,
  children
}: Props) => {
  const origin =
    image.indexOf('marcosrjjunior.com') !== -1
      ? ''
      : 'https://marcosrjjunior.com/'

  return (
    <Head>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {!shouldDisableBot && (
        <>
          <meta name="googlebot" content="all" />
          <meta name="robots" content="all" />
        </>
      )}

      <meta property="og:title" content={title} />
      <meta property="og:url" content={origin + url} />
      {/* <meta property="og:image" content={origin + image} /> */}
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="react-tables @marcosrjjunior" />

      {/* <meta name="twitter:card" content={origin + image} /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={origin + url} />
      {/* <meta name="twitter:image" content={origin + image} /> */}
      <meta name="twitter:site" content="react-tables @marcosrjjunior" />

      {children}
    </Head>
  )
}

export default Meta
