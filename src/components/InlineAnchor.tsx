import { ReactNode } from 'react'
import s from 'src/styles/InlineAnchor.module.scss'

interface InlineAnchorProps {
  children: ReactNode
  link: string
}

function InlineAnchor({ children, link }: InlineAnchorProps) {
  return (
    <a className={s.inlineAnchor} href={link} target='_blank' rel='noopener noreferrer'>
      {children}
      test
    </a>
  )
}

export default InlineAnchor
