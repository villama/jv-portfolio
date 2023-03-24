import { useContext } from 'react'
import { InvertedContext } from 'src/context/inverted-context'
import SocialLinks from 'src/components/SocialLinks'
import InlineAnchor from 'src/components/InlineAnchor'
import compose from 'src/utils/composeClasses'
import s from 'src/styles/PageSpreads.module.scss'

function PageSpreads() {
  const inverted = useContext(InvertedContext)!
  return (
    <div className={s.pageSpreads}>
      <div className={compose(s.page, s.one)}>
        <div>
          <h1 className={compose(s.title, inverted && s.inverted)}>
            Julius Villamayor
          </h1>
          <div className={s.subtitle}>
            <p><b>Full Stack Engineer</b></p>
          </div>
        </div>
      </div>
      <div className={compose(s.page, s.two)}>
        <div>
          <h1 className={compose(s.title, inverted && s.inverted)}>
            Julius Villamayor
          </h1>
          <div className={s.subtitle}>
            <p><InlineAnchor link='https://uvic.ca/'>UVic</InlineAnchor> Grad, Computer Science & Psychology</p>
            <p>Currently at <InlineAnchor link='https://roms.inc/'>ROMS, Inc.</InlineAnchor></p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default PageSpreads
