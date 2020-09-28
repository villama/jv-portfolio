import dynamic from 'next/dynamic'
import PageContent from '../components/PageContent/PageContent'
import Head from 'next/head'
import { SickoModeProvider } from '../context/sickoMode-context'
const MusicOverlay = dynamic(() => import('../components/MusicOverlay/MusicOverlay'), { ssr: false })

function IndexPage() {
  return (
    <div>
      <SickoModeProvider>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='Julius Villamayor'
            content='A Software Developer | A Graduate from the University of Victoria | BSc Computer Science and Psychology'
          />
          <title>Julius Villamayor</title>
        </Head>
        <MusicOverlay />
        <PageContent />
      </SickoModeProvider>
    </div>
  )
}

export default IndexPage
