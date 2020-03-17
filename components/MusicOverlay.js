import Amplitude from 'amplitudejs'
import timestamps from '../utils/timestamps'
import { useRef } from 'react'

export default function MusicOverlay() {
  const opacity = 0.075

  let beatCount = 0
  let opacityDelta = 0

  const staticEl = useRef(null)

  window.onload = () => {
    Amplitude.init({
      songs: [
        {
          url: '/aloneTime.mp3'
        }
      ]
    })

    const renderFrame = () => {
      const currSongTime = Amplitude.getSongPlayedSeconds()

      if (currSongTime >= timestamps[beatCount]) {
        beatCount += 1
        opacityDelta = 0.05
        console.log(`beatCount: ${beatCount}`)
      }

      // Static decay
      opacityDelta = Math.max(opacityDelta - 0.005, 0)

      // Beats 15-16
      if (beatCount === 15) opacityDelta = 0.05
      if (beatCount === 16) opacityDelta = 0

      staticEl.current.style.opacity = opacity + opacityDelta

      if (beatCount < timestamps.length || opacityDelta > 0)
        requestAnimationFrame(renderFrame)
    }

    renderFrame()
  }

  return (
    <div>
      <div className='static' ref={staticEl} />
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
          opacity: ${opacity + opacityDelta};
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
