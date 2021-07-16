import Head from 'next/head'
import { InvertedProvider } from 'src/context/inverted-context'
import PageSpreads from 'src/components/PageSpreads'
import StaticOverlay from 'src/components/StaticOverlay'

function IndexPage() {
  return (
    <div>
      <InvertedProvider>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='Julius Villamayor'
            content='A Software Developer | A Graduate from the University of Victoria | BSc Computer Science and Psychology'
          />
          <title>Julius Villamayor</title>
        </Head>
        <StaticOverlay />
        <PageSpreads />
      </InvertedProvider>
    </div>
  )
}

export default IndexPage