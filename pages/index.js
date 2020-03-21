import dynamic from 'next/dynamic'
import Page from '../components/Page'

const MusicOverlay = dynamic(() => import('../components/MusicOverlay'), {
  ssr: false
})

export default function Index() {
  return (
    <div>
      <MusicOverlay />
      <Page idx={0} />
      <Page idx={1} />

      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
