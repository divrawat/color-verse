import '@/styles/globals.css'
import Layout from '@/components/Layout'
import LoadingBar from '@/components/LoadingBar'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ColorVerse - CSS Tools & Inspirations</title>
        <meta name="description" content="A collection of cool CSS tools and colorful inspirations." />
      </Head>
      <LoadingBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
