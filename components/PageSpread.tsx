import { useContext } from 'react'
import { InvertedContext } from 'context/inverted-context'
import SocialLinks from 'components/SocialLinks'
import InlineAnchor from 'components/InlineAnchor'
import s from '../styles/PageSpread.module.scss'

function PageSpread() {
  const inverted = useContext(InvertedContext)!

  return (
    <div className={s.pageSpread}>
      <div className={`${s.page} ${s.one}`}>
        <div>
          <h1 className={`${s.title} ${inverted ? s.inverted:''}`}>
            Julius Villamayor
          </h1>
          <div className={s.subtitle}>
            <p><b>Full Stack Developer</b></p>
          </div>
        </div>
      </div>
      <div className={`${s.page} ${s.two}`}>
        <div>
          <h1 className={`${s.title} ${inverted ? s.inverted:''}`}>
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

export default PageSpread
