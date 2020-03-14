import Amplitude from 'amplitudejs'
import timestamps from '../utils/timestamps'

export default function Music() {
  let beatCount = 0

  window.onload = () => {
    Amplitude.init({
      songs: [
        {
          url: '/aloneTime.mp3'
        }
      ]
    })

    const renderFrame = () => {
      const currentSongTime = Amplitude.getSongPlayedSeconds()
      if (beatCount < timestamps.length) {
        if (currentSongTime >= timestamps[beatCount]) {
          beatCount += 1
          console.log(`beatCount: ${beatCount}`)
        }
      }
      requestAnimationFrame(renderFrame)
    }
    renderFrame()
  }

  return (
    <div>
      <p
        onClick={() => {
          Amplitude.play()
        }}
      >
        Start Song
      </p>
    </div>
  )
}
