import { useContext } from 'react'
import { InvertedContext } from 'context/inverted-context'
import SocialLinks from 'components/SocialLinks'
import InlineAnchor from 'components/InlineAnchor'
import compose from 'utils/composeClasses'
import s from 'styles/PageSpreads.module.scss'

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
            <p><b>Full Stack Developer</b></p>
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
            <p>Currently at <InlineAnchor link='https://exansoftware.com/'>Exan Software</InlineAnchor></p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default PageSpreads
