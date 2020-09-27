import styles from './Anchor.module.scss'

export default function Anchor({ display, link }: {
  display: React.ReactNode
  link: string
}) {
  return (
    <a
      className={styles.anchor}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {display}
    </a>
  )
}
