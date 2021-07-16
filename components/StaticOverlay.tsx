import s from 'styles/StaticOverlay.module.scss'

export default function StaticOverlay() {
  return (
    <div className={s.staticOverlay}>
      <div className={s.static} />
    </div>
  )
}
