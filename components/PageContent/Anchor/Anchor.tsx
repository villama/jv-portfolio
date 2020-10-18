import styles from './Anchor.module.scss'
import { ReactNode } from 'react'

export default function Anchor({ children, link }: {
  children: ReactNode
  link: string
}) {
  return (
    <a
      className={styles.anchor}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}
