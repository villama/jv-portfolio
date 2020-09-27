import '../globals.scss'
import { AppProps } from 'next/app'
import { SickoModeProvider } from '../context/sickoMode-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SickoModeProvider>
      <Component {...pageProps} />
    </SickoModeProvider>
  )
}

export default MyApp
