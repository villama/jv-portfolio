import dynamic from 'next/dynamic'

const MusicOverlay = dynamic(() => import('../components/MusicOverlay'), {
  ssr: false
})

export default function Index() {
  return (
    <div>
      <h1>Hello World!</h1>
      <MusicOverlay />
    </div>
  )
}
