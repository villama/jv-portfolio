import Amplitude from 'amplitudejs'

export default function Music() {
  window.onload = () => {
    Amplitude.init({
      songs: [
        {
          url: '/aloneTime.mp3'
        }
      ]
    })
  }

  return (
    <div>
      <p
        onClick={() => {
          Amplitude.play()
        }}
      >
        Music
      </p>
    </div>
  )
}
