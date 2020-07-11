import { useContext } from 'react'
import { SickoModeContext } from '../utils/context'
import Links from './Links'
import Anchor from './Anchor'

export default function Subpage({ idx }) {
  const sickoMode = useContext(SickoModeContext)

  const pageVars = [
    {
      backgroundColor: '#fafafa',
      subtitleTexts: [<b>Full Stack Developer</b>],
      subtitleSize: 'calc(1vw + 1vh + 1vmin)',
      links: undefined
    },
    {
      backgroundColor: '#d7a798',
      subtitleTexts: [
        <React.Fragment>
          <Anchor display='UVic' link='https://uvic.ca/' /> Grad, Computer
          Science & Psychology
        </React.Fragment>,
        <React.Fragment>
          Currently at{' '}
          <Anchor display='Exan Software' link='https://exansoftware.com/' />
        </React.Fragment>
      ],
      subtitleSize: 'calc(0.7vw + 0.7vh + 0.9vmin)',
      links: <Links />
    }
  ]

  return (
    <div className='Page'>
      <div className='content'>
        <h1>Julius Villamayor</h1>
        <div className='subtitle'>
          {pageVars[idx].subtitleTexts.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        {pageVars[idx].links}
      </div>
      <style jsx>{`
        .Page {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: ${pageVars[idx].backgroundColor};
          cursor: default;
        }

        .content {
          text-align: right;
          z-index: 2;
        }

        h1 {
          font-size: calc(3vw + 3vh + 1.5vmin);
          margin: 0;
          color: ${sickoMode ? 'white' : 'black'};
        }

        .subtitle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: calc(3vw + 3vh + 1.5vmin);
          position: relative;
        }

        p {
          margin: 0;
          right: 0;
          font-size: ${pageVars[idx].subtitleSize};
        }
      `}</style>
    </div>
  )
}
