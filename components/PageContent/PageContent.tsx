import { useSickoModeState } from '../../context/sickoMode-context'
import Links from './Links/Links'
import Anchor from './Anchor/Anchor'
import styles from './PageContent.module.scss'

function PageContent() {
  const sickoMode = useSickoModeState()

  return (
    <div className={styles.container}>
      <div className={[styles.page, styles.one].join(' ')}>
        <div>
          <h1 className={[styles.title, sickoMode.isSickoMode && styles.sickoMode].join(' ')}>
            Julius Villamayor
          </h1>
          <div className={styles.subtitle}>
            <p>
              <b>Full Stack Developer</b>
            </p>
          </div>
        </div>
      </div>

      <div className={[styles.page, styles.two].join(' ')}>
        <div>
          <h1 className={[styles.title, sickoMode.isSickoMode && styles.sickoMode].join(' ')}>
            Julius Villamayor
          </h1>
          <div className={styles.subtitle}>
            <p>
              <Anchor display='UVic' link='https://uvic.ca/' /> Grad, Computer Science & Psychology
            </p>
            <p>
              Currently at <Anchor display='Exan Software' link='https://exansoftware.com/' />
            </p>
          </div>
          <Links />
        </div>
      </div>
    </div>
  )
}

export default PageContent
