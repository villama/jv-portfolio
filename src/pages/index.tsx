import dynamic from 'next/dynamic'
import Head from 'next/head'
import { InvertedProvider } from 'src/context/inverted-context'
import PageSpreads from 'src/components/PageSpreads'
const MusicOverlay = dynamic(() => import('src/components/MusicOverlay'), { ssr: false })

function IndexPage() {
  return (
    <div>
      <InvertedProvider>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='Julius Villamayor'
            content='Full Stack Engineer | University of Victoria Graduate, BSc Computer Science and Psychology'
          />
          <title>Julius Villamayor</title>
        </Head>
        <MusicOverlay />
        <PageSpreads />
      </InvertedProvider>
    </div>
  )
}

export default IndexPage
