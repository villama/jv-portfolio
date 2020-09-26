import Amplitude from 'amplitudejs'
import timestamps from '../../utils/timestamps'
import { useRef, useContext } from 'react'
import { Context } from '../../utils/Context'
import styles from './MusicOverlay.module.scss'

export default function MusicOverlay() {
  const staticEl = useRef<HTMLDivElement>(null)
  const volOnEl = useRef<HTMLDivElement>(null)
  const volOffEl = useRef<HTMLDivElement>(null)
  const volLoadingEl = useRef<HTMLDivElement>(null)

  const { setSickoMode } = useContext(Context)

  let beatCount = 0
  let buttonsEnabled = true

  window.onload = () => {
    console.log(Amplitude)
    console.log(Amplitude.getSongs())
    initAmplitude()
    console.log(Amplitude.getSongs())

    function renderFrame() {
      const currSongTime = Amplitude.getSongPlayedSeconds()

      if (currSongTime >= timestamps[beatCount]) {
        beatCount += 1

        if (beatCount == 15) {
          addHeavyClass()
          setSickoMode(true)
        } else if (beatCount == 16) {
          removeHeavyClass()
          setSickoMode(false)
        } else restartPulseAnimation()
      }

      if (beatCount < timestamps.length) requestAnimationFrame(renderFrame)
    }

    function addHeavyClass() {
      staticEl.current!.classList.remove(styles.pulse)
      staticEl.current!.classList.add(styles.heavy)
    }

    function removeHeavyClass() {
      staticEl.current!.classList.remove(styles.heavy)
    }

    function restartPulseAnimation() {
      staticEl.current!.classList.remove(styles.pulse)
      setTimeout(() => staticEl.current!.classList.add(styles.pulse), 1)
    }

    renderFrame()
  }

  function initAmplitude() {
    Amplitude.init({
      songs: [
        {
          url: '/music.mp3'
        }
      ]
    })
  }

  function handleTogglingOn() {
    if (!buttonsEnabled) return
    else disableButtons(300)

    if (!Amplitude) initAmplitude()

    Amplitude.play()
    if (Amplitude.getSongPlayedSeconds() > 0) changeSoundIcon('on')
    else setLoadingIcon(300)
  }

  function setLoadingIcon(timeout: number) {
    setTimeout(() => {
      if (Amplitude.getSongPlayedSeconds() === 0) {
        changeSoundIcon('loading')
        setLoadingIcon(50)
      } else {
        changeSoundIcon('on')
      }
    }, timeout)
  }

  function handleTogglingOff() {
    if (!buttonsEnabled) return
    else disableButtons(300)
    Amplitude.pause()
    changeSoundIcon('off')
  }

  function changeSoundIcon(icon: string) {
    volOnEl.current!.classList.add(styles.hidden)
    volOffEl.current!.classList.add(styles.hidden)
    volLoadingEl.current!.classList.add(styles.hidden)

    switch (icon) {
      case 'on':
        volOnEl.current!.classList.remove(styles.hidden)
        break
      case 'off':
        volOffEl.current!.classList.remove(styles.hidden)
        break
      case 'loading':
        volLoadingEl.current!.classList.remove(styles.hidden)
    }
  }

  function disableButtons(ms: number) {
    buttonsEnabled = false
    setTimeout(() => (buttonsEnabled = true), ms)
  }

  return (
    <div className={styles.container}>
      <div className={styles.static} ref={staticEl} />

      <div className={styles.sound}>
        <div className={styles.off} onClick={handleTogglingOn} ref={volOffEl}>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z' />
          </svg>
        </div>
        <div
          className={[styles.on, styles.hidden].join(' ')}
          onClick={handleTogglingOff}
          ref={volOnEl}
        >
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' />
          </svg>
        </div>
        <div
          className={[styles.spinner, styles.hidden].join(' ')}
          ref={volLoadingEl}
        >
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13 5.0164C12.8347 5.00552 12.668 5 12.5 5C8.35786 5 5 8.35786 5 12.5C5 16.6421 8.35786 20 12.5 20C16.6421 20 20 16.6421 20 12.5C20 12.332 19.9945 12.1653 19.9836 12H17.9776C17.9924 12.1647 18 12.3315 18 12.5C18 15.5376 15.5376 18 12.5 18C9.46243 18 7 15.5376 7 12.5C7 9.46243 9.46243 7 12.5 7C12.6685 7 12.8353 7.00758 13 7.02242V5.0164Z'
              fill='black'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
