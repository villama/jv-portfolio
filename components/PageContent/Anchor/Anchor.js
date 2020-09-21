import styles from './Anchor.module.scss'

export default function Anchor({ display, link }) {
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
