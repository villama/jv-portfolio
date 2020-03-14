import Amplitude from 'amplitudejs'
import timestamps from '../utils/timestamps'

export default function MusicOverlay() {
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
      if (currentSongTime >= timestamps[beatCount]) {
        beatCount += 1
        console.log(`beatCount: ${beatCount}`)
      }
      if (beatCount < timestamps.length) requestAnimationFrame(renderFrame)
    }
    renderFrame()
  }

  return (
    <div>
      <div className='static' />
      <p
        onClick={() => {
          Amplitude.play()
        }}
      >
        Start Song
      </p>
      <style jsx>{`
        .static {
          background-image: url('/static.png');
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          opacity: 0.075;
          position: fixed;
          pointer-events: none;
          animation: flip 0.3s steps(1) infinite;
          z-index: 0;
        }

        @keyframes flip {
          0%,
          100% {
            transform: scaleX(1) scaleY(1);
          }
          25% {
            transform: scaleX(-1) scaleY(1);
          }
          50% {
            transform: scaleX(-1) scaleY(-1);
          }
          75% {
            transform: scaleX(1) scaleY(-1);
          }
        }
      `}</style>
    </div>
  )
}
