import Amplitude from 'amplitudejs'
import timestamps from '../utils/timestamps'
import { useRef } from 'react'

export default function MusicOverlay() {
  const staticEl = useRef(null)

  const opacityFloor = 0.075
  const opacityCeiling = 0.125

  let beatCount = 0

  window.onload = function() {
    Amplitude.init({
      songs: [
        {
          url: '/aloneTime.mp3'
        }
      ]
    })

    function renderFrame() {
      const currSongTime = Amplitude.getSongPlayedSeconds()

      if (currSongTime >= timestamps[beatCount]) {
        restartPulseAnimation()
        beatCount += 1
      }

      if (beatCount < timestamps.length) requestAnimationFrame(renderFrame)
    }

    function restartPulseAnimation() {
      staticEl.current.classList.remove('pulse')
      setTimeout(() => staticEl.current.classList.add('pulse'), 1)
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
          opacity: ${opacityFloor};
          position: fixed;
          pointer-events: none;
          animation: jumble-anim 0.3s steps(1) infinite;
          z-index: 0;
        }

        .pulse {
          animation: jumble-anim 0.3s steps(1) infinite, pulse-anim 1.5s;
        }

        @keyframes jumble-anim {
          0%,
          100% {
            transform: scaleX(1) scaleY(1);
          }
          25% {
            transform: scaleX(-1) scaleY(-1);
          }
          50% {
            transform: scaleX(-1) scaleY(1);
          }
          75% {
            transform: scaleX(1) scaleY(-1);
          }
        }

        @keyframes pulse-anim {
          0% {
            opacity: ${opacityCeiling};
          }
          100% {
            opacity: ${opacityFloor};
          }
        }
      `}</style>
    </div>
  )
}
