import styles from './Anchor.module.scss'

type AnchorProps = {
  display: React.ReactNode
  link: string
}

export default function Anchor({ display, link }: AnchorProps) {
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
