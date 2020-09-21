import dynamic from 'next/dynamic'
import Content from '../components/PageContent/PageContent'
import { ContextProvider } from '../utils/context'
import Head from 'next/head'

const MusicOverlay = dynamic(() => import('../components/MusicOverlay/MusicOverlay'), {
  ssr: false
})

export default function IndexPage() {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Julius Villamayor'
          content='A Software Developer | A Graduate from the University of Victoria | BSc Computer Science and Psychology'
        />
        <title>Julius Villamayor</title>
      </Head>
      <ContextProvider>
        <MusicOverlay />
        <Content />
      </ContextProvider>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
            'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
